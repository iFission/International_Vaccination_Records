import React from "react";
import { Bar } from "react-chartjs-2";
import "../css/Chart.css";

const Chart = ({ filteredCountry }) => {
  return (
    <div>
          <div className="Chart" >
            <div className="total_vaccinations_chart">
              <Bar
                
                data={{
                  labels: ["Total Vaccinations"],
                  datasets: [
                    {
                      data: [filteredCountry.vaccinated],
                      label: `Total Vaccinations in ${filteredCountry.countryName}: ${filteredCountry.vaccinated}`,
                      backgroundColor: "#e76f51",
                      borderColor: "#171717",
                      fill: true,
                    },
                  ],
                }}
                height={null}
                width={null}
                options={{
                  maintainAspectRatio: false,
                }}
              />
            </div>
            {/* <div className="daily_vaccinations_chart">
              <Bar
                
                data={{
                  labels: ["Daily Vaccinations"],
                  datasets: [
                    {
                      data: [country.daily_vaccinations],
                      label: `Daily Vaccinations in ${country.country}: ${country.daily_vaccinations}`,
                      backgroundColor: "#f4a261",
                      borderColor: "#171717",
                      fill: true,
                    },
                  ],
                }}
                height={null}
                width={null}
                // height={410}
                // width={580}
                options={{
                  maintainAspectRatio: false,
                }}
              />
            </div> */}
          </div>

    </div>)
};

export default Chart;

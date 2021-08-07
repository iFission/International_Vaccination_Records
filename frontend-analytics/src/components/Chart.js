import React from "react";
import { Bar } from "react-chartjs-2";
import "../css/Chart.css";

const Chart = ({ filteredCountry }) => {
  return (
    <div>
      {filteredCountry.map((country, i) => {
        return (
          <div className="Chart" key={i}>
            <div className="total_vaccinations_chart">
              <Bar
                key={i}
                data={{
                  labels: ["Total Vaccinations"],
                  datasets: [
                    {
                      data: [country.total_vaccinations],
                      label: `Total Vaccinations in ${country.country}: ${country.total_vaccinations}`,
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
            <div className="daily_vaccinations_chart">
              <Bar
                key={i}
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
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Chart;

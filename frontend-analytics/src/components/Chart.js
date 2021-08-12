import React from "react";
import { Bar, Pie } from "react-chartjs-2";
import "../css/Chart.css";

const Chart = ({ filteredCountry }) => {
  return (
    <div>
          <div className="Chart" >
            <div className="total_vaccinations_chart">
              <Pie  
                data={{
                  labels: ["Vaccinated","Unvaccinated"],
                  datasets: [
                    {
                      data: [filteredCountry.vaccinated, filteredCountry.population-filteredCountry.vaccinated],
                      label: `Total Vaccinations in ${filteredCountry.countryName}: ${filteredCountry.vaccinated}`,
                      backgroundColor: ['rgba(34,139,34, 0.2)', 'rgba(255, 99, 132, 0.2)',],
                      borderColor: ['rgba(34,139,34, 1)', 'rgba(255, 99, 132, 1)',],
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
          </div>

    </div>)
};

export default Chart;

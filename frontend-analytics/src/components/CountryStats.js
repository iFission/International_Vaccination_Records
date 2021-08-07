import React from "react";
import LoadingComponent from "./LoadingComponent";
import CountUp from "react-countup";
import "../css/CountryStats.css";

const CountryStats = ({ filteredCountry }) => {
  console.log(typeof(filteredCountry.vaccinated));
  return (
    <div>
            <div className="Stats">
              <div className="total_vaccinations">
                <h3>Total Population</h3>
                <div className="divider__line"></div>
                <p>{filteredCountry.countryName}</p>
                {/* <p id="date">{new Date(country.date).toDateString()}</p> */}
                <p>{filteredCountry.population}</p>
                {/* <h2 id="main_result">
                  <CountUp
                    end={Number(filteredCountry.population)}
                    // end={Number("111111111")}
                    duration={1}
                  />
                </h2> */}
              </div>
              <div className="vaccines">
                <h3>Total Vaccinations</h3>
                <div className="divider__line"></div>
                <p>{filteredCountry.countryName}</p>
                {/* <h2 id="main_result">
                  <CountUp
                    end={Number(filteredCountry.vaccinated)}
                    // end={Number("111111111")}
                    duration={1}
                  />
                </h2> */}
                <p>{filteredCountry.vaccinated}</p>
                {/* <p id="date">{new Date(country.date).toDateString()}</p> */}
                {/* <h2 id="vaccine_main_result">{filteredCountry.countryName}</h2> */}
              </div>
            </div>
    </div>
  );
};

export default CountryStats;

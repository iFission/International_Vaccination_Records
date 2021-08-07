import React from "react";
import LoadingComponent from "./LoadingComponent";
import CountUp from "react-countup";
import "../css/CountryStats.css";

const CountryStats = ({ filteredCountry }) => {
  return (
    <div>
            <div className="Stats">
              <div className="total_vaccinations">
                <h3>Total Vaccinations</h3>
                <div className="divider__line"></div>
                <p>{filteredCountry[0]}</p>
                {/* <p id="date">{new Date(country.date).toDateString()}</p> */}
                <h2 id="main_result">
                  <CountUp
                    end={Number(filteredCountry[2])}
                    duration={1}
                  />
                </h2>
              </div>
              <div className="vaccines">
                <h3>Vaccine Used</h3>
                <div className="divider__line"></div>
                <p>{filteredCountry[0]}</p>
                {/* <p id="date">{new Date(country.date).toDateString()}</p> */}
                <h2 id="vaccine_main_result">{filteredCountry}</h2>
              </div>
            </div>
    </div>
  );
};

export default CountryStats;

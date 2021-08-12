import React from "react";
import CountUp from "react-countup";
import "../css/CountryStats.css";

const CountryStats = ({ filteredCountry }) => {
  return (
    <div>
      <div className="Stats">
        <div className="total_vaccinations">
          <h3>Total Population</h3>
          <div className="divider__line"></div>
          <p>{filteredCountry.countryName}</p>
          <p>{filteredCountry.population}</p>
          <h2 id="main_result">
            <CountUp end={Number(filteredCountry.population)} duration={1} />
          </h2>
        </div>
        <div className="vaccines">
          <h3>Percentage Vaccinated</h3>
          <div className="divider__line"></div>
          <p>{filteredCountry.countryName}</p>
          <p>{filteredCountry.percentVaxxed}</p>
        </div>
        <div className="vaccines">
          <h3>Total Vaccinations</h3>
          <div className="divider__line"></div>
          <p>{filteredCountry.countryName}</p>
          <p>{filteredCountry.vaccinated}</p>
          <h2 id="main_result">
            <CountUp end={Number(filteredCountry.vaccinated)} duration={1} />
          </h2>
        </div>
      </div>
    </div>
  );
};

export default CountryStats;

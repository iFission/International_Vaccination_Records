import React, { Component } from "react";
import "./css/App.css";
import Web3 from "web3";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "./config";

// COMPONENTS
import Navigation from "./components/Navigation";
import CountryStats from "./components/CountryStats";
import InfoDetails from "./components/InfoDetails";
import Chart from "./components/Chart";

class App extends Component {
  componentWillMount() {
    this.loadBlockchainData();
  }

  async loadBlockchainData() {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
    const accounts = await web3.eth.getAccounts();
    this.setState({ account: accounts[0] });
    const fullContract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
    this.setState({ fullContract: fullContract });
    const allCountries = await fullContract.methods.getCountryNames().call();
    console.log(allCountries);
    this.setState({ allCountries: allCountries });
    const singaporeDetails = await fullContract.methods
      .getCountryAnalaytics("Singapore")
      .call();
    var percentVaccinated = calculatePercentVaxxed(
      singaporeDetails["2"],
      singaporeDetails["1"]
    );
    console.log("this is the percent vaccinated", percentVaccinated);
    var firstDetails = {
      countryName: singaporeDetails["0"],
      population: singaporeDetails["1"],
      vaccinated: singaporeDetails["2"],
      percentVaxxed: percentVaccinated,
    };
    this.setState({ countryDetails: firstDetails });
    // const countryDetails = Object.assign({}, this.state.newCtc);
    // this.setState(Object.assign(this.state.countryDetails,{countryName:singaporeDetails["0"], population:singaporeDetails["1"], vaccinated: singaporeDetails["2"]}));
  }

  getCountryDetails = async (country) => {
    const countryDetails = await this.state.fullContract.methods
      .getCountryAnalaytics(country)
      .call();
    console.log(
      "This is the ",
      country,
      " details is from the blockchain",
      countryDetails
    );
    var percentVaccinated = calculatePercentVaxxed(
      countryDetails["2"],
      countryDetails["1"]
    );
    var parsedCountryDetails = parseObject(countryDetails, percentVaccinated);
    this.setState({ countryDetails: parsedCountryDetails });
  };

  handleSearch = (val) => {
    // setSearchBar(val);
    console.log("I'm changing the country to,", val);
    this.getCountryDetails(val);
    // this.setState({countryDetails: val});
  };

  constructor(props) {
    super(props);
    this.state = {
      account: "",
      fullContract: "",
      allCountries: [],
      fullContract: "",
      countryDetails: {},
      filteredCountry: "India",
    };
  }

  filteredCountry = () => {
    return this.state.filteredCountry;
  };

  render() {
    return (
      <div className="App">
        <div className="left__screen">
          <Navigation
            countries={this.state.allCountries}
            handleSearch={this.handleSearch}
            searchBar={this.setState.filteredCountry}
            filteredCountry={this.state.filteredCountry}
          />
          <CountryStats filteredCountry={this.state.countryDetails} />
          <Chart filteredCountry={this.state.countryDetails} />
        </div>
      </div>
    );
  }
}
export default App;

function calculatePercentVaxxed(population, vaccinations) {
  var fraction = (parseInt(population) / parseInt(vaccinations)) * 100;
  return fraction.toFixed(2);
}

function parseObject(countryDetails, percentVaccinated) {
  var firstDetails = {
    countryName: countryDetails["0"],
    population: countryDetails["1"],
    vaccinated: countryDetails["2"],
    percentVaxxed: percentVaccinated,
  };
  return firstDetails;
}

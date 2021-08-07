pragma solidity >=0.7.0 <0.9.0;

contract Records {

    struct Record{
        string passportNumber;
        string vaccineManufacturer;
        string country;
        uint timestamp;
    }
    
    struct CountryDetails {
        string name;
        uint256 population;
        uint256 totalVaccinated;
        // uint256 percentageVaccinated;          // Might have to let frontend calculate
        // mapping (string => uint) manufacturerNumbers;
    }

    string[] passportNumbers;
    string[] countryNames;
    mapping (string => Record) records;
    mapping (string => CountryDetails) analytics;

    function store(string memory passportNumber, string memory vaccineManufacturer, string memory country) public {
        passportNumbers.push(passportNumber);
        records[passportNumber] = Record({passportNumber: passportNumber, vaccineManufacturer: vaccineManufacturer, country: country, timestamp: block.timestamp});
        
        // Add the country when a new country comes on.
        if (analytics[country].population == 0){
            // analytics[country] = CountryDetails({name: country, population: 10000000, totalVaccinated: 1, percentageVaccinated:0});
            analytics[country] = CountryDetails({name: country, population: 10000000, totalVaccinated: 1});
        } else{
            analytics[country].totalVaccinated += 1;
        }
    }

    function retrieve(string memory passportNumber) public view returns (string memory, string memory, string memory, uint){
        return (records[passportNumber].passportNumber, records[passportNumber].vaccineManufacturer, records[passportNumber].country, records[passportNumber].timestamp);
    }
    
    function countryAnalaytics(string memory countryName) public view returns (string memory, uint, uint){
        // return (analytics[countryName].name, analytics[countryName].population, analytics[countryName].totalVaccinated, analytics[countryName].percentageVaccinated);
        return (analytics[countryName].name, analytics[countryName].population, analytics[countryName].totalVaccinated);
    }
    
    function addCountry(string memory countryName, uint256 population, uint256 vaccinatedNumbers) public {
        analytics[countryName] = CountryDetails({name: countryName, population: population, totalVaccinated: vaccinatedNumbers});
        countryNames.push(countryName);
    }
    
    function getAllCountries() public view returns (string [] memory) {
        return countryNames;
    }
}
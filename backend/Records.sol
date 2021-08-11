pragma solidity >=0.7.0 <0.9.0;

contract Records {
    struct Record {
        uint256 passportNumber;
        string vaccineManufacturer;
        string country;
        uint256 timestamp;
    }

    struct RsaKey {
        uint256 key;
        uint256 modulus;
    }

    struct CountryDetails {
        string name;
        uint256 population;
        uint256 totalVaccinated;
    }

    uint256[] passportNumbers;
    mapping(uint256 => Record) records;
    mapping(string => RsaKey) countryToPublicKeyMap;
    string[] countryNames;
    mapping(string => CountryDetails) analytics;

    function store(
        uint256 passportNumberEncrypted,
        uint256 passportNumber,
        string memory vaccineManufacturer,
        string memory country,
        uint256 clinicKeyCert,
        uint256 clinicModulusCert
    ) public payable returns (bool) {
        if (
            verifyClinic(
                passportNumberEncrypted,
                passportNumber,
                country,
                clinicKeyCert,
                clinicModulusCert
            )
        ) {
            passportNumbers.push(passportNumber);
            records[passportNumber] = Record({
                passportNumber: passportNumber,
                vaccineManufacturer: vaccineManufacturer,
                country: country,
                timestamp: block.timestamp
            });

            analytics[country].totalVaccinated += 1;

            return true;
        } else {
            return false;
        }
    }

    function retrieve(uint256 passportNumber)
        public
        view
        returns (
            uint256,
            string memory,
            string memory,
            uint256
        )
    {
        return (
            records[passportNumber].passportNumber,
            records[passportNumber].vaccineManufacturer,
            records[passportNumber].country,
            records[passportNumber].timestamp
        );
    }

    function getClinicPublicKey(
        uint256 clinicKeyCert,
        uint256 clinicModulusCert,
        string memory country
    ) public view returns (RsaKey memory) {
        RsaKey memory countryPublicKey = countryToPublicKeyMap[country];
        uint256 clinicKey = computeRsa(
            clinicKeyCert,
            countryPublicKey.key,
            countryPublicKey.modulus
        );
        uint256 clinicModulus = computeRsa(
            clinicModulusCert,
            countryPublicKey.key,
            countryPublicKey.modulus
        );
        RsaKey memory clinicPublicKey = RsaKey(clinicKey, clinicModulus);
        return clinicPublicKey;
    }

    function verifyClinic(
        uint256 passportNumberEncrypted,
        uint256 passportNumber,
        string memory country,
        uint256 clinicKeyCert,
        uint256 clinicModulusCert
    ) public view returns (bool) {
        RsaKey memory clinicPublicKey = getClinicPublicKey(
            clinicKeyCert,
            clinicModulusCert,
            country
        );
        uint256 passportNumberDecrypted = computeRsa(
            passportNumberEncrypted,
            clinicPublicKey.key,
            clinicPublicKey.modulus
        );

        return passportNumberDecrypted == passportNumber;
    }

    function computeRsa(
        uint256 x,
        uint256 exponent,
        uint256 modulus
    ) public view returns (uint256) {
        return (x**exponent) % modulus;
    }

    constructor() public {
        countryToPublicKeyMap["Singapore"] = RsaKey(5, 35);
        countryNames.push("Singapore");
        analytics["Singapore"] = CountryDetails({
            name: "Singapore",
            population: 5704000,
            totalVaccinated: 3860000
        });

        countryToPublicKeyMap["Malaysia"] = RsaKey(5, 35);
        countryNames.push("Malaysia");
        analytics["Malaysia"] = CountryDetails({
            name: "Malaysia",
            population: 31950000,
            totalVaccinated: 9050000
        });

        countryToPublicKeyMap["India"] = RsaKey(5, 35);
        countryNames.push("India");
        analytics["India"] = CountryDetails({
            name: "India",
            population: 1366000000,
            totalVaccinated: 113000000
        });

        countryToPublicKeyMap["China"] = RsaKey(5, 35);
        countryNames.push("China");
        analytics["China"] = CountryDetails({
            name: "China",
            population: 1398000000,
            totalVaccinated: 223000000
        });

        countryToPublicKeyMap["United States"] = RsaKey(5, 35);
        analytics["United States"] = CountryDetails({
            name: "United States",
            population: 328200000,
            totalVaccinated: 166650000
        });
    }

    function countryAnalaytics(string memory countryName)
        public
        view
        returns (
            string memory,
            uint256,
            uint256
        )
    {
        return (
            analytics[countryName].name,
            analytics[countryName].population,
            analytics[countryName].totalVaccinated
        );
    }

    function addCountry(
        string memory countryName,
        uint256 population,
        uint256 vaccinatedNumbers
    ) public {
        analytics[countryName] = CountryDetails({
            name: countryName,
            population: population,
            totalVaccinated: vaccinatedNumbers
        });
        countryNames.push(countryName);
    }

    function getAllCountries() public view returns (string[] memory) {
        return countryNames;
    }
}

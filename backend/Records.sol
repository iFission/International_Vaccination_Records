pragma solidity >=0.7.0 <0.9.0;

contract Records {
    struct Record {
        uint256[] passportNumber;
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

    bytes32[] passportNumbers;
    mapping(bytes32 => Record) records;
    mapping(string => RsaKey) countryToPublicKeyMap;
    string[] countryNames;
    mapping(string => CountryDetails) analytics;

    function add(
        uint256[] memory passportNumberEncrypted,
        uint256[] memory passportNumber,
        bytes32 passportNumberHash,
        string memory vaccineManufacturer,
        string memory country,
        uint256 clinicKeyCert,
        uint256 clinicModulusCert
    ) public payable returns (string memory) {
        if (records[passportNumberHash].timestamp > 0) {
            return
                "Record already exists in the blockchain and is immutable, please check that you have entered the correct passport number.";
        } else {
            if (
                verifyClinic(
                    passportNumberEncrypted,
                    passportNumber,
                    country,
                    clinicKeyCert,
                    clinicModulusCert
                )
            ) {
                passportNumbers.push(passportNumberHash);
                records[passportNumberHash] = Record({
                    passportNumber: passportNumber,
                    vaccineManufacturer: vaccineManufacturer,
                    country: country,
                    timestamp: block.timestamp
                });

                analytics[country].totalVaccinated += 1;

                return "Record added successfully.";
            } else {
                return "Error, please check that you are authorised.";
            }
        }
    }

    function get(bytes32 passportNumberHash)
        public
        view
        returns (
            uint256[] memory,
            string memory,
            string memory,
            uint256
        )
    {
        return (
            records[passportNumberHash].passportNumber,
            records[passportNumberHash].vaccineManufacturer,
            records[passportNumberHash].country,
            records[passportNumberHash].timestamp
        );
    }

    function getClinicPublicKey(
        uint256 clinicKeyCert,
        uint256 clinicModulusCert,
        string memory country
    ) private view returns (RsaKey memory) {
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
        uint256[] memory passportNumberEncrypted,
        uint256[] memory passportNumber,
        string memory country,
        uint256 clinicKeyCert,
        uint256 clinicModulusCert
    ) public view returns (bool) {
        RsaKey memory clinicPublicKey = getClinicPublicKey(
            clinicKeyCert,
            clinicModulusCert,
            country
        );

        for (uint256 i = 0; i < passportNumberEncrypted.length; i++) {
            if (
                passportNumber[i] !=
                computeRsa(
                    passportNumberEncrypted[i],
                    clinicPublicKey.key,
                    clinicPublicKey.modulus
                )
            ) {
                return false;
            }
        }

        return true;
    }

    function computeRsa(
        uint256 x,
        uint256 exponent,
        uint256 modulus
    ) private view returns (uint256) {
        return (x**exponent) % modulus;
    }

    function getCountryAnalaytics(string memory countryName)
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
    ) private {
        analytics[countryName] = CountryDetails({
            name: countryName,
            population: population,
            totalVaccinated: vaccinatedNumbers
        });
        countryNames.push(countryName);
    }

    function getCountryNames() public view returns (string[] memory) {
        return countryNames;
    }

    function verifyHash(uint256[] memory input, bytes32 hash)
        public
        view
        returns (bool)
    {
        return keccak256(abi.encodePacked(input)) == hash;
    }

    function getHash(uint256[] memory input) public view returns (bytes32) {
        return keccak256(abi.encodePacked(input));
    }

    function bytes32ToString(bytes32 _bytes32)
        public
        pure
        returns (string memory)
    {
        uint8 i = 0;
        while (i < 32 && _bytes32[i] != 0) {
            i++;
        }
        bytes memory bytesArray = new bytes(i);
        for (i = 0; i < 32 && _bytes32[i] != 0; i++) {
            bytesArray[i] = _bytes32[i];
        }
        return string(bytesArray);
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
}

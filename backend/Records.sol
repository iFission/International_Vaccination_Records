pragma solidity >=0.7.0 <0.9.0;

contract Records {

    struct Record{
        uint passportNumber;
        string vaccineManufacturer;
        string country;
        uint timestamp;
    }
    
    struct RsaKey{
        uint key;
        uint modulus;
    }

    uint[] passportNumbers;
    mapping (uint => Record) records;
    mapping (string => RsaKey) countryToPublicKeyMap;


    function store(uint passportNumber, string memory vaccineManufacturer, string memory country, uint clinicKeyCert, uint clinicModulusCert) public {
        RsaKey memory countryPublicKey = countryToPublicKeyMap[country];
        // uint clinicKey = computeRsa(clinicKeyCert, countryPublicKey["key"], countryPublicKey["modulus"]);
        // RsaKey memory clinicPublicKey = RsaKey(clinicKey, clinicModulus);
        
        //uint clinicPublicKey = decryptRsa();
        
        passportNumbers.push(passportNumber);
        records[passportNumber] = Record({passportNumber: passportNumber, vaccineManufacturer: vaccineManufacturer, country: country, timestamp: block.timestamp});
    }

    function retrieve(uint passportNumber) public view returns (uint, string memory, string memory, uint){
        return (records[passportNumber].passportNumber, records[passportNumber].vaccineManufacturer, records[passportNumber].country, records[passportNumber].timestamp);
    }
    
    function getCountryToPublicKeyMap(string memory country) public view returns(RsaKey memory){
        return countryToPublicKeyMap[country];
    }
    
    function getClinicPublicKey(uint clinicKeyCert, uint clinicModulusCert, string memory country) public view returns(RsaKey memory){
        RsaKey memory countryPublicKey = countryToPublicKeyMap[country];
        uint clinicKey = computeRsa(clinicKeyCert, countryPublicKey.key, countryPublicKey.modulus);
        uint clinicModulus = computeRsa(clinicModulusCert, countryPublicKey.key, countryPublicKey.modulus);
        RsaKey memory clinicPublicKey = RsaKey(clinicKey, clinicModulus);
        return clinicPublicKey;
    }
    
    function computeRsa(uint x, uint exponent, uint modulus) public view returns(uint){
        return (x**exponent)%modulus;
    }
    
    constructor() public{
        countryToPublicKeyMap["Singapore"] = RsaKey(5, 35);
    }
}
pragma solidity >=0.7.0 <0.9.0;

contract Records {

    struct Record{
        string passportNumber;
        string vaccineManufacturer;
        string country;
        uint timestamp;
    }

    string[] passportNumbers;
    mapping (string => Record) records;
    mapping (string => uint256) countryToPublicKeyMap;

    function store(string memory passportNumber, string memory vaccineManufacturer, string memory country) public {
        passportNumbers.push(passportNumber);
        records[passportNumber] = Record({passportNumber: passportNumber, vaccineManufacturer: vaccineManufacturer, country: country, timestamp: block.timestamp});
    }

    function retrieve(string memory passportNumber) public view returns (string memory, string memory, string memory, uint){
        return (records[passportNumber].passportNumber, records[passportNumber].vaccineManufacturer, records[passportNumber].country, records[passportNumber].timestamp);
    }
    
    function getCountryToPublicKeyMap(string memory country) public view returns(uint256){
        return countryToPublicKeyMap[country];
    }
    
    constructor() public{
        countryToPublicKeyMap["Singapore"] = 123456;
    }
}
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

    function store(string memory passportNumber, string memory info) public {
        passportNumbers.push(passportNumber);
        records[passportNumber] = Record({passportNumber: passportNumber, vaccineManufacturer: info, country: "Singapore", timestamp: block.timestamp});
    }

    function retrieve(string memory passportNumber) public view returns (string memory, string memory, string memory, uint){
        return (records[passportNumber].passportNumber, records[passportNumber].vaccineManufacturer, records[passportNumber].country, records[passportNumber].timestamp);
    }
}
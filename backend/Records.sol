pragma solidity >=0.7.0 <0.9.0;

contract Records {

    string[] passportNumbers;
    mapping (string => string) records;

    function store(string memory passportNumber, string memory info) public {
        passportNumbers.push(passportNumber);
        records[passportNumber] = info;
    }

    function retrieve(string memory passportNumber) public view returns (string memory){
        return records[passportNumber];
    }
}
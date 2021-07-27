pragma solidity >=0.7.0 <0.9.0;

/**
 * @title Records
 * @dev Store & retrieve records in an array
 */
contract Records {

    uint256 number;

    /**
     * @dev Store value in variable
     * @param num value to store
     */
    function store(uint256 num) public {
        number = num;
    }

    /**
     * @dev Return value 
     * @return value of 'number'
     */
    function retrieve() public view returns (uint256){
        return number;
    }
}
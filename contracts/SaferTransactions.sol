// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;

/**
 * @title Transaction
 * @dev allows rollback
 */
contract Transaction {

    address public owner;
    uint256 public timer;
    uint256 public create_time;
    address public payee;

    constructor(address p, uint256 time) payable {
        require(msg.value > 0 , "transaction must have some money");
        payee= p;
        owner= msg.sender;
        timer= time;
        create_time = block.timestamp;
    }

    function iFuckedUp() public {
        require(msg.sender==owner, "Call failed. Only owner can fuck up");
        require(block.timestamp - create_time > timer, "You've really fucked up. transaction time over");
        payable(owner).transfer(address(this).balance);
    }

    function get_payee() public view returns (address){
        return payee;
    }
    function get_receivable_time() public view returns (uint256){
        return create_time+timer;
    }
    function giveMeMyMoney() public {
        require(msg.sender==payee, "Only the listed person can receive money");
        require(block.timestamp > create_time + timer, "the sender can still fuck up");
        payable(payee).transfer(address(this).balance);
    }

    /**
     * @dev returns value of balance
     */
    function get_balance() public view returns (uint256){
        return address(this).balance;
    }

}
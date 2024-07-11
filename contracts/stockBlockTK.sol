// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract stockBlock{
    uint256 public transition_fee = 0.001 ether;
    address payable public owner;
    uint256 public SBTK_total_supply;
    uint256 public SBTK_current_supply;
    struct SBTK_ownership {
        address payable owner;
        uint256 amount;
    }
    SBTK_ownership[] public SBTK_ownership_list;
    struct NASDAQTK_ownership{
        address payable owner;
        uint256 amount;
    }

    struct NASDAQTK_deal{
        address payable seller;
        uint256 amount;
        uint256 price;
    }

    NASDAQTK_ownership[] public NASDAQTK_ownership_list;
    NASDAQTK_deal[] public NASDAQTK_Market;

    constructor(){
        owner = payable (msg.sender);
        SBTK_total_supply = 10000 * 1000000000000000000;
        SBTKOwnershipEnlist(owner, 1000 * 1000000000000000000);
        NASDAQTKOwnershipEnlist(owner, 100);
    }



    /////////////////////////////////////////////////////////////////
    // NASDAQTK trading functions
    /////////////////////////////////////////////////////////////////


    // For user to post the deal on market to sell NASDAQTK
    function NASDAQTKPostDeal(uint256 amount, uint256 price) public {
        require(getNASDAQTKOwnershipAmount(payable (msg.sender)) >= amount, "Error! Not enough NASDAQTK");
        NASDAQTK_deal memory newNASDAQTKDeal = NASDAQTK_deal(payable (msg.sender), amount, price);
        NASDAQTKOwnershipDeducting(payable (msg.sender), amount);
        NASDAQTK_Market.push(newNASDAQTKDeal);
    }


    // Get everyone's assets
    function getNASDAQTKOwnershipList() public view returns(NASDAQTK_ownership[] memory){
        return NASDAQTK_ownership_list;
    }


    // For user to retrieve posted deal on market for free
    function NASDAQTKRetrieveDeal(address seller, uint256 amount, uint256 price) public {
        require(payable (msg.sender) == payable (seller), "Error! The deal does not belongs to you");
        if (NASDAQTKMarketDelist(payable (seller), amount, price)){
            NASDAQTKOwnershipEnlist(payable (msg.sender), amount);
        }
    }


    // For buyer buy NASDAQTK from seller, generate transaction fee
    // The transaction fee is randomly rewarded to one of the SBTK owner
    // The selection chance is depend on how much SBTK they own
    function NASDAQTKAcceptDeal(address seller, uint256 amount, uint256 price) public payable {
        require(msg.value >= transition_fee + price, "Error! No enough coins to do the transfer.");
        if (NASDAQTKMarketDelist(payable (seller), amount, price)){
            NASDAQTKOwnershipEnlist(payable (msg.sender), amount);
            payable (seller).transfer(price);
            sendTransferFee();
        }
    }


    // Display market
    function getNASDAQTKDealList() public view returns(NASDAQTK_deal[] memory){
        return NASDAQTK_Market;
    }


    function NASDAQTKOwnershipDeducting(address payable addr, uint256 amount) private {
        for (uint256 i = 0; i < NASDAQTK_ownership_list.length; i++){
            if (NASDAQTK_ownership_list[i].owner == addr){
                require(NASDAQTK_ownership_list[i].amount >= amount, "Error! Not enough NASDAQTK");
                NASDAQTK_ownership_list[i].amount -= amount;
                if (NASDAQTK_ownership_list[i].amount == 0){
                    NASDAQTKOwnershipDelist(addr);
                }
                break;
            }
        }
    }


    function NASDAQTKOwnershipEnlist(address payable addr, uint256 amount) private {
        bool isFound = false;
        for (uint256 i = 0; i < NASDAQTK_ownership_list.length; i++){
            if (NASDAQTK_ownership_list[i].owner == addr){
                NASDAQTK_ownership_list[i].amount += amount;
                isFound = true;
                break;
            }
        }
        if (!isFound) {
            NASDAQTK_ownership memory newNASDAQOwnership = NASDAQTK_ownership(addr, amount);
            NASDAQTK_ownership_list.push(newNASDAQOwnership);
        }
    }


    function getNASDAQTKOwnershipAmount(address payable addr) public view returns(uint256){
        for (uint256 i = 0; i < NASDAQTK_ownership_list.length; i++){
            if (NASDAQTK_ownership_list[i].owner == addr){
                return NASDAQTK_ownership_list[i].amount;
            }
        }
        return 0;
    }


    function NASDAQTKOwnershipDelist(address payable addr) private {
        for (uint256 i = 0; i < NASDAQTK_ownership_list.length; i++){
            if (NASDAQTK_ownership_list[i].owner == addr){
                NASDAQTK_ownership_list[i] = NASDAQTK_ownership_list[NASDAQTK_ownership_list.length - 1];
                NASDAQTK_ownership_list.pop();
                break;
            }
        }
    }


    function NASDAQTKMarketDelist(address seller, uint256 amount, uint256 price) private returns (bool) {
        NASDAQTK_deal memory deal = NASDAQTK_deal(payable (seller), amount, price);
        for (uint256 i; i < NASDAQTK_Market.length; i++){
            if (ifNASDAQTKDealMatch(NASDAQTK_Market[i], deal)){
                NASDAQTK_Market[i] = NASDAQTK_Market[NASDAQTK_Market.length - 1];
                NASDAQTK_Market.pop();
                return true;
            }
        }
        return false;
    }


    function ifNASDAQTKDealMatch(NASDAQTK_deal memory thisDeal, NASDAQTK_deal memory thatDeal) pure private returns (bool){
        return (thisDeal.seller == thatDeal.seller) && (thisDeal.amount == thatDeal.amount) && (thisDeal.price == thatDeal.price);
    }


    /////////////////////////////////////////////////////////////////
    // SBTK functions, admin only
    /////////////////////////////////////////////////////////////////


    function getSBTKTotalSupply() public view returns(uint256){
        return SBTK_total_supply;
    }


    function getSBTKCurrentSupply() public view returns(uint256){
        return SBTK_current_supply;
    }


    function SBTKOwnershipDeducting(address payable addr, uint256 amount) public {
        require(msg.sender == owner, "Error! Only owner is allowed to call this function");
        for (uint256 i = 0; i < SBTK_ownership_list.length; i++){
            if (SBTK_ownership_list[i].owner == addr){
                require(SBTK_ownership_list[i].amount >= amount * 1000000000000000000, "Error! Not enough SBTK");
                require(SBTK_current_supply >= amount * 1000000000000000000, "Error! Not enough SBTK supply");
                SBTK_current_supply -= amount * 1000000000000000000;
                SBTK_ownership_list[i].amount -= amount * 1000000000000000000;
                if (SBTK_ownership_list[i].amount == 0){
                    SBTKOwnershipDelist(addr);
                }
                break;
            }
        }
    }


    function sendTransferFee() private {
        uint256 luckyNum = random(SBTK_current_supply);
        uint256 luckyNumVerify = 0;
        for (uint256 i; i < SBTK_ownership_list.length; i++){
            luckyNumVerify += SBTK_ownership_list[i].amount;
            if (luckyNumVerify > luckyNum){
                SBTK_ownership_list[i].owner.transfer(address(this).balance);
            }
        }
    }


    function SBTKOwnershipEnlist(address payable addr, uint256 amount) public {
        require(msg.sender == owner, "Error! Only owner is allowed to call this function");
        SBTK_current_supply += amount * 1000000000000000000;
        bool isFound = false;
        for (uint256 i = 0; i < SBTK_ownership_list.length; i++){
            if (SBTK_ownership_list[i].owner == addr){
                SBTK_ownership_list[i].amount += amount * 1000000000000000000;
                isFound = true;
                break;
            }
        }
        if (!isFound) {
            SBTK_ownership memory newSBTKOwnership = SBTK_ownership(addr, amount);
            SBTK_ownership_list.push(newSBTKOwnership);
        }
    }


    function getSBTKOwnershipList() public view returns(SBTK_ownership[] memory){
        return SBTK_ownership_list;
    }


    function getSBTKOwnershipAmount(address payable addr) public view returns(uint256){
        for (uint256 i = 0; i < SBTK_ownership_list.length; i++){
            if (SBTK_ownership_list[i].owner == addr){
                return SBTK_ownership_list[i].amount;
            }
        }
        return 0;
    }


    function SBTKOwnershipDelist(address payable addr) public {
        require(msg.sender == owner, "Error! Only owner is allowed to call this function");
        for (uint256 i = 0; i < SBTK_ownership_list.length; i++){
            if (SBTK_ownership_list[i].owner == addr){
                SBTK_current_supply -= SBTK_ownership_list[i].amount;
                SBTK_ownership_list[i] = SBTK_ownership_list[SBTK_ownership_list.length - 1];
                SBTK_ownership_list.pop();
                break;
            }
        }
    }


    /////////////////////////////////////////////////////////////////
    // Helper functions
    /////////////////////////////////////////////////////////////////

    function random(uint256 number) public view returns(uint256) {
        return uint256(keccak256(abi.encodePacked(block.timestamp, block.difficulty,
            msg.sender))) % number;
    }









}




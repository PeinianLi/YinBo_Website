import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
//import { FINNHUB_CALL_WS, FINNHUB_API_KEY } from '@/APIkeys';
import { Title } from '@mui/icons-material';
import contractABI from '@/contracts/abi/chainlinktest.json';
import Web3 from 'web3';


const web3 = new Web3("https://rpc2.sepolia.org");
const contractAddress = "0xA1d862D17e363d1ce404c8688fF4dcC03F30E031";
const contract = new web3.eth.Contract(contractABI, contractAddress);
contract.methods.getLatestPrice().call()
    .then(console.log)
    .catch(console.error);


const FINNHUB_API_KEY= "co9op29r01qgj7bnb510co9op29r01qgj7bnb51g";
const Card = styled.div`
    border: 5px solid #117FC6;
    border-radius: 4px;
    padding: 25px;
    margin: 10px;
    background-color: #fff;
    color: black;
    border-radius: 20px;
    min-width: 450px;
`;

const Titties = styled.h2`
    font-size: 2em;
    text-align: center;
    color: #117FC6;
    text-align: left;
    border-bottom: 3px solid white;
    padding-bottom: 10px;
`;

const StockList = styled.ul`
    list-style-type: none;
    padding: 3px;
`;

const StockItem = styled.li`
    margin-bottom: 10px;
`;

const MarketLink= styled.a`
    color: gray;
    text-decoration: none;
    font-size: 0.8em;
    &:hover {
        text-decoration: underline;
    }
`;
const StockSymbol = styled.span`
  font-weight: bold;
`;
const CurrentPrice = styled.span`
    color: green;
`;
const PercentageChange = styled.span`
  color: ${props => props.change >= 0 ? 'green' : 'red'};
`;

const StockCard = () => {
    const [stocks, setStocks] = useState([]);

//   useEffect(() => {
//     const socket = new WebSocket(FINNHUB_CALL_WS);

//     socket.addEventListener('open', function (event) {
//       socket.send(JSON.stringify({'type':'subscribe', 'symbol': 'AAPL'}));
//       //socket.send(JSON.stringify({'type':'subscribe', 'symbol': 'BINANCE:BTCUSDT'}));
//       //socket.send(JSON.stringify({'type':'subscribe', 'symbol': 'IC MARKETS:1'}));
//     });

//     socket.addEventListener('message', function (event) {
//       const data = JSON.parse(event.data);
//       setStocks(stocks => [...stocks, ...data.data]);
//     });
    const stockSymbols = [
        'AAPL', 
        'GOOGL', 
        'MSFT',
        'TSLA',
        'AMZN',
        'INTC',
        'NFLX',
        'NVDA',
        'AMD',
    ]; // Want to eventually automate this to display top ten trending stocks

    //Market use the below but formatted as a windows. Look into creating a pagination component too

    useEffect(() => {
    Promise.all(
        stockSymbols.map(symbol =>
        fetch(`https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${FINNHUB_API_KEY}`)
            .then(response => response.json())
            .then(data => ({ symbol, ...data }))
        )//ToDo want to add a feature to display error messages
    ).then(stocks => setStocks(stocks));
    }, []);

    const [contractValue, setContractValue] = useState(null);

    useEffect(() => {
    contract.methods.getLatestPrice().call()
        .then(value => setContractValue(Number(value)/100000000))
        .catch(console.error);
    }, []);

    return (
        <Card>
        <Titties>Trending TStocks</Titties>
        <StockList>
        {stocks.map((stock, index) => {
            const percentageChange = ((stock.c - stock.pc) / stock.pc * 100).toFixed(2);
            return (
                <StockItem key={index}>
                <StockSymbol>{stock.symbol}</StockSymbol> - 
                Current: $<CurrentPrice>{stock.c}</CurrentPrice>,
                % Change <PercentageChange change={percentageChange}> {percentageChange}%</PercentageChange>
                </StockItem>
            );
        })}
            <StockItem key= "BTC">
                <StockSymbol>BTC</StockSymbol>- Current: $<CurrentPrice>{contractValue}</CurrentPrice>
            </StockItem>

        </StockList>
        <MarketLink href= "/market">Click to see 69+ Stock Tokens `{'>>>'}`</MarketLink>
        </Card>
    );
};

export default StockCard;
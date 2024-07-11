import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
//import { FINNHUB_CALL_WS, FINNHUB_API_KEY } from '@/APIkeys';
import { Title } from '@mui/icons-material';
const FINNHUB_API_KEY= "co9op29r01qgj7bnb510co9op29r01qgj7bnb51g";
const Card = styled.div`
    padding: 25px;
    margin: 100px;
    background-color: #fff;
    color: black;
    border-radius: 20px;
    width: 1600px;
`;

const Titties = styled.h2`
    font-size: 2em;
    text-align: center;
    color: #117FC6;
    text-align: left;
    border-bottom: 3px solid white;
    padding-bottom: 30px;
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
const StockTable = styled.table`
    width: 100%;
    border-collapse: collapse;
`;
const StockRow = styled.tr`
    padding: 10 px 0;
    border-bottom: 1px solid #ddd;
    margin: 10px 0;
`;
const StockCell = styled.td`s
    padding: 10px;
`;
const PercentageChangeCell = styled.td`
    color: ${props => props.change >= 0 ? 'green' : 'red'};
`;
const CurrentPriceCell = styled.td`
    color: yellow;
`;
const SymbolCell = styled.td`
    font-weight: bold;
`;
const Head = styled.thead`
    color: #117FC6;
    font-weight: bold;
`;
const Body = styled.tbody`
    padding: 10px 0;
    
`;
const StockMarket = () => {
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
        'F',
        'PLTR',
        'T',
        'BABA',
        'PLUG',
        'NIO',
        'GE',
        'PFE',
        'BAC',
        'C',
        'WFC',
        'JPM',
        'GS',
        'MS',
        'CSCO',
        'IBM',
        'ORCL',
        'CRM',
        'TSM',
        'QCOM',
        'MU',
        'LRCX',
       
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

    return (
        <div style={{display:"flex", justifyContent:"center", width:"100%"}}>
            <Card>
                <Titties>Market Overview</Titties>
                <StockTable>
                    <Head>
                        <StockRow>
                            <StockCell>Symbol</StockCell>
                            <StockCell>Current</StockCell>
                            <StockCell>% Change</StockCell>
                            <StockCell>High</StockCell>
                            <StockCell>Low</StockCell>
                        </StockRow>
                    </Head>
                    <Body>
                        {
                            /*
                            IF we want to make this use the websocket, we need to create a way that changes are constanly mapped
                            to their own row instead of creating and appending a row below.
                            */
                        }
                        {stocks.map((stock, index) => (

                            <StockRow key={index}>
                                <SymbolCell>{stock.symbol}</SymbolCell>
                                <StockCell>${stock.c}</StockCell>
                                <PercentageChangeCell change= {(stock.c-stock.pc)/stock.pc*100}>{((stock.c-stock.pc)/stock.pc*100).toFixed(2)}%</PercentageChangeCell>
                                <StockCell>${stock.h}</StockCell>
                                <StockCell>${stock.l}</StockCell>
                            </StockRow>
                        ))}
                    </Body>
                </StockTable>
            </Card>
        </div>
    );
};

export default StockMarket;
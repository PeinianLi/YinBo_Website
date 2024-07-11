import React, { useState } from 'react';
import styled from 'styled-components';
import StockCard from "../components/StockCard";

const TabList = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const TabButton = styled.button`
  padding: 10px 20px;
  cursor: pointer;
  opacity: 0.6;
  background: white;
  border: 0;
  outline: 0;
  ${({ active }) =>
    active &&
    `
    border-bottom: 2px solid black;
    opacity: 1;
  `}
`;

const TabContent = styled.div`
  padding: 20px;
  border: 1px solid #ddd;
`;

const Container = styled.div`
  align-self: center;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 50px;
  max-width: 1500px;
  gap: 40px;

  @media (max-width: 1200px) {
    justify-content: center;
    flex-direction: column;
  }
`;

const Trade_Container_left = styled.div`
  width: 500px;
  //@media (max-width: 1200px) {
  //  display: none;
  //}
`;

const Trade_Container_right = styled.div`
  width: 500px;

  //@media (max-width: 1200px) {
  //  align-self: flex-start; /* Adjust this if you still want it top-aligned */
  //}
`;

export const Tabs = ({ children }) => {
    const [activeTab, setActiveTab] = useState(children[0].props.label);

    return (
        <>
            <div style={{width:"100%", display:"flex", justifyContent:"center"}}>
                <Container>
                    <Trade_Container_left>
                        <h1>{activeTab} Crypto</h1>
                        <StockCard/>
                    </Trade_Container_left>

                    <Trade_Container_right>
                        <TabList>
                            {children.map((tab) => (
                                <TabButton
                                    key={tab.props.label}
                                    active={tab.props.label === activeTab}
                                    onClick={() => setActiveTab(tab.props.label)}
                                >
                                    {tab.props.label}
                                </TabButton>
                            ))}
                        </TabList>
                        {children.map((tab) => {
                            if (tab.props.label !== activeTab) return undefined;
                            return <TabContent key={tab.props.label}>{tab.props.children}</TabContent>;
                        })}
                    </Trade_Container_right>
                </Container>
            </div>


        </>
    );
};

export const Tab = ({ children }) => {
    return <>{children}</>;
};

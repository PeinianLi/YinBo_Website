import * as React from "react";
import styled from "styled-components";

const Section = styled.section`
  display: flex;
  justify-content: center;
  gap: 50px;
  
  @media (max-width: 1200px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0;
  }
`;

const ImageColumn = styled.div`
  width: 500px;
  height: 500px;
  border-radius: 20px;
  overflow: hidden;
  img {
    width: 100%;
    aspect-ratio: 1;
    object-fit: cover;
  }
  
  @media (max-width: 1200px) {
    width: 100%;
  }
`;

const Image = styled.img`
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
`;

const ContentColumn = styled.div`
  width: 50%;
  margin-left: 20px;
  
  @media (max-width: 1200px) {
    width: 100%;
    margin-left: 0;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  margin: auto 0;
  padding: 0 20px;
  
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const Heading = styled.h2`
  color: #117FC6;
  font: 700 42px/1.31 "DM Sans", sans-serif;
`;

const Description = styled.p`
  color: black;
  margin-top: 30px;
  font: 400 20px/1.78 "DM Sans", sans-serif;
  
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

export const HowItWorks = () => {
    return (
        <Section>
            <ImageColumn>
                <Image src="./assets/coolPic.png" />
            </ImageColumn>
            <ContentColumn>
                <ContentWrapper>
                    <Heading>How does StockBlock work?</Heading>
                    <Description>
                        StockBlock is a protocol that allows users to tokenize fractional stock tokens via the blockchain. Through allowing users to collaterize their own stocks, StockBlock is able to provide a decentralized finance solution for the stock market. Much like how Robinhood allows users to purchase fractional stocks, Stockblock allows users to list their own stock as collateral in a liquidity pool for other users to purchase tokens that represent fractional shares of the stock.
                    </Description>
                </ContentWrapper>
            </ContentColumn>
        </Section>
    );
}
export default HowItWorks;
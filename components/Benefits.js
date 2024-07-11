import * as React from "react";
import styled from "styled-components";

const benefitsData = [
    {
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/8305df05d78342a26eddd81f0437d4cd2d2bf59ff5fbbcb54393da5bb44cbcf6?apiKey=454c520eb05c413c8994a5e99df3cbcd&",
        title: "Send & Receive",
        description: "PROOF OF CONCEPT DO NOT INVEST REAL MONEY"
    },
    {
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c3c85844f0302fa484b8d0cb05b145bf1a2f3f26db727d18bff57873483f7f5c?apiKey=454c520eb05c413c8994a5e99df3cbcd&",
        title: "100% Secure Wallet",
        description: "PROOF OF CONCEPT DO NOT INVEST REAL MONEY"
    },
    {
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/257ef0a035bdbeacaf8f7b3f53a6dc725a99e0977195dc6b84afed65ffecbe1e?apiKey=454c520eb05c413c8994a5e99df3cbcd&",
        title: "Trading Charts",
        description: "PROOF OF CONCEPT DO NOT INVEST REAL MONEY"
    }
];


const BenefitsTitle = styled.h2`
    color: #117FC6;
    text-align: center;
    font: 700 42px/131% DM Sans, sans-serif;
`;

const BenefitsDescription = styled.p`
    color: var(#fff, --white);
    text-align: center;
    margin-top: 37px;
    max-width: 496px;
    font: 400 18px/32px DM Sans, sans-serif;
    
    @media (max-width: 991px) {
        max-width: 100%;
    }
`;

const BenefitsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
`;


const BenefitsGrid = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  margin-top: 86px;

  @media (max-width: 1200px) {
    flex-direction: column;
    gap: 40px;
    margin-top: 40px;
  }
`;

const BenefitCard = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  border-radius: 40px;
  background-color: var(--dark-blue, #010d50);
  color: var(--white, #fff);
  padding: 50px 23px;
  max-width: 400px;
`;

const BenefitCardIcon = styled.img`
  width: 68px;
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
`;

const BenefitCardTitle = styled.h3`
  margin-top: 26px;
  font: 700 18px/144.4% DM Sans, sans-serif;
  letter-spacing: 0.9px;
  text-transform: uppercase;
  color: var(--white, #fff);
`;

const BenefitCardDescription = styled.p`
    margin-top: 20px;
    font: 400 16px/26px DM Sans, sans-serif;
`;

function BenefitsSection() {
    return (
        <BenefitsContainer>
        <BenefitsTitle>Benefits of StockBlock</BenefitsTitle>
        <BenefitsDescription>
            
        </BenefitsDescription>
        <BenefitsGrid>
            {benefitsData.map((benefit, index) => (
            <BenefitCard key={index}>
                <BenefitCardIcon src={benefit.icon} alt="" />
                <BenefitCardTitle>{benefit.title}</BenefitCardTitle>
                <BenefitCardDescription>{benefit.description}</BenefitCardDescription>
            </BenefitCard>
            ))}
        </BenefitsGrid>
        </BenefitsContainer>
    );
}

export default BenefitsSection;
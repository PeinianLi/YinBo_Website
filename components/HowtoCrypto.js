import * as React from "react";
import styled from "styled-components";
import step1 from "@/public/assets/how-step1.svg"

const HowtoData = [
    {
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/8305df05d78342a26eddd81f0437d4cd2d2bf59ff5fbbcb54393da5bb44cbcf6?apiKey=454c520eb05c413c8994a5e99df3cbcd&",
        title: "1.Enter Amount & Select Payment",
        description: "Enter the amount, select the available payment method, and choose the account to receive the payment."
    },
    {
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c3c85844f0302fa484b8d0cb05b145bf1a2f3f26db727d18bff57873483f7f5c?apiKey=454c520eb05c413c8994a5e99df3cbcd&",
        title: "2.Confirm Order",
        description: "Confirmation of transaction detail information, including trading pair quotes, fees, and other explanatory tips."
    },
    {
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/257ef0a035bdbeacaf8f7b3f53a6dc725a99e0977195dc6b84afed65ffecbe1e?apiKey=454c520eb05c413c8994a5e99df3cbcd&",
        title: "3.Receive Cash",
        description: "After the payment is successful, the purchased digital currency will arrive at the Spot Wallet."
    }
];
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

function HowtoCrypto() {
    return (
        <>
            <BenefitsContainer>
                <BenefitsGrid>
                    {HowtoData.map((crypto, index) => (
                        <BenefitCard key={index}>
                            <BenefitCardIcon src={crypto.icon} alt="" />
                            <BenefitCardTitle>{crypto.title}</BenefitCardTitle>
                            <BenefitCardDescription>{crypto.description}</BenefitCardDescription>
                        </BenefitCard>
                    ))}
                </BenefitsGrid>
            </BenefitsContainer>
        </>
    );
}

export default HowtoCrypto;
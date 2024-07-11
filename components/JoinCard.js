import React from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    background: #fff;
    margin-right: 50px;
    margin-left: 50px;
    border-radius: 10px;
    max-width: 800px;
    min-width: 400px;
`;

const Title = styled.span`
    font-size: 3.5rem;
    font-weight: 700;
    color: #117FC6;
    width: 100%;
`;

const Description = styled.p`
    line-height: 1.5rem;
    font-size: 1rem;
    margin-top: 1rem;
    color: black;
`;

const InputGroup = styled.div`
    display: flex;
    max-width: 28rem;
    margin-top: 1rem;
    column-gap: 0.5rem;
`;

const Input = styled.input`
    outline: none;
    line-height: 1.5rem;
    font-size: 0.875rem;
    color: rgb(255, 255, 255);
    padding: 0.5rem 0.875rem;
    background-color: rgba(255, 255, 255, 0.05);
    border: 1px solid Gray;
    border-radius: 0.375rem;
    flex: 1 1 auto;

    &::placeholder {
        color: rgb(216, 212, 212);
    }

    &:focus {
        border: 1px solid rgb(99, 102, 241);
    }
`;

const Button = styled.button`
    color: #fff;
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 1.25rem;
    padding: 0.625rem 0.875rem;
    background-color: rgb(99, 102, 241);
    border-radius: 0.375rem;
    border: none;
    outline: none;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    transform: scale(1.05); /* Slightly increase the scale */
  }
`;

const JoinCard = () => {
    return (
        <StyledForm>
        <Title>Tokenize Your Stocks for Flexibility, Security, and Stability.</Title>
        <Description> 
            Unlock the next level of financial innovation with our Stock Stable Coins, cryptocurrencies that combines the explosive potential of crypto with the solid foundation of real-world stocks. 
            Experience unprecedented stability in your investments, backed by tangible assets, and seize the opportunity to be at the forefront of blending traditional markets with digital currencies. 
            Embrace the future of finance today and make your move towards a smarter, more secure investment.  
        </Description>
        <InputGroup>
            <Input placeholder="Enter your email" type="email" name="email" id="email-address" />
            <Button type="submit">Join Now</Button>
        </InputGroup>
    </StyledForm>
    );
};

export default JoinCard;

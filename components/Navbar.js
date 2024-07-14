import styled, { keyframes } from 'styled-components';
import React from 'react';

export default function Navbar() {
    return (
        <StyledNavbar>
            <StyledLink href="/"><Logo src="./assets/ZhouBoLogo.jpg" alt={"Logo"}/></StyledLink>
            <div style={{marginLeft: "200px"}}>
                <StyledLink href="/biography">Biography</StyledLink>
                <DropdownContainer>
                    <StyledLink>Articles</StyledLink>
                    <DropdownContent>
                        <DropdownLink href="/fitnessDesign">Fitness Design</DropdownLink>
                        <DropdownLink href="/ipDesign">IP Brand Design</DropdownLink>
                        <DropdownLink href="/painting">Painting</DropdownLink>
                        <DropdownLink href="/misc">Misc</DropdownLink>
                    </DropdownContent>
                </DropdownContainer>
                <StyledLink href="/contact">Contact</StyledLink>
            </div>
        </StyledNavbar>
    );
}

const StyledNavbar = styled.nav`
  height: 200px;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  background: #126696;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
`;

const StyledLink = styled.a`
  color: white;
  transition: color 0.2s ease;
  text-decoration: none;
  margin: 0 1rem;
  &:hover {
    color: #ddd;
  }
`;

const DropdownLink = styled.a`
  color: #333;
  transition: color 0.2s ease;
  text-decoration: none;
  margin-top: 10px;
  margin-bottom: 10px;
  &:hover {
    color: #ddd;
  }
`;

const zoomInOutIn = keyframes`
  0% {
    transform: scale(1.0);
  }
  70% {
    transform: scale(0.8);
  }
  80% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1.0);
  }
`;

const Logo = styled.img`
  transition: filter 0.2s ease;
  height: 50px;
  transform: scale(1.0);
  display: block;
  margin: 0 auto;
  width: 100%;
  max-width: 400px;
  &:hover {
    filter: opacity(0.7);
    animation: ${zoomInOutIn} 0.4s ease forwards;
  }
`;

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const fadeInDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  padding: 35px 25px;
  z-index: 1;
  flex-direction: column;
  align-items: flex-start;
  animation: ${fadeInDown} 0.4s ease-out forwards;

  ${DropdownContainer}:hover & {
    display: flex;
  }
`;

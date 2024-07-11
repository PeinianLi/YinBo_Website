import React from "react";
import styled from "styled-components";
import { ConnectWallet, lightTheme } from "@thirdweb-dev/react";
import {useEffect, useState} from 'react';

const navItems = [
    { label: "Home", url: "/" },
    { label: "Buy-Sell", url: "/buy-sell" },
    { label: "Market", url: "/market" },
    { label: "About", url: "/about" },
    { label: "Mint", url: "/mint" },
];

export const Navbar=()=> {
    const [style, setStyle] = useState({ opacity: 1});

    useEffect(() => {
        const handleScroll=(e)=> {
        const shouldScrollDown = window.scrollY > 300;
        if (shouldScrollDown) {
          setStyle({translateY: '-100px', opacity: 1});
        } else {
          setStyle({translateY: '0px', opacity: 1});
        }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <HeaderWrapper opacity={style.opacity} $translateY={style.translateY}>
        <HeaderContent>
            <LogoWrapper>
            <a href="/">
            <Logo src="./assets/StockBlocktps2.png" />
            </a>
            <Nav>
                {navItems.map((item) => (
                <NavItem key={item.label} href={item.url}>
                    <NavLink>
                        {item.label}
                    </NavLink>
                </NavItem>
                ))}
            </Nav>
            </LogoWrapper>
            <ConnectWallet theme= {customLightTheme}/>
        </HeaderContent>
        </HeaderWrapper>
    );
}
const customLightTheme = lightTheme({
    fontFamily: "DM Sans, sans-serif",
    colors: {
        primaryButtonBg: "#117FC6",
      // ... etc
        }
    });
const NavLink = styled.h3`
  color: #126696;
  text-decoration: none;
  underline: none;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: #0d4665;
    transform: scale(1.01); /* Slightly increase the scale */
  }
`

const HeaderWrapper = styled.header`
    align-items: center;
    background-color: transparent;
    color: #000;
    display: flex;
    position: fixed;
    justify-content: center;
    padding: 33px 60px;
    text-transform: uppercase;
    height: 100px;
    width: 98.9vw;
    z-index: 100;
    background-color: #fff;

    opacity: ${props => props.opacity};
    transform: translateY(${props => props.$translateY});
    transition: all 0.3s linear;

    @media (max-width: 991px) {
        padding: 0 20px;
    }
`;

const HeaderContent = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 1246px;
    width: 100%;

    @media (max-width: 991px) {
        flex-wrap: wrap;
        max-width: 100%;
        padding: 0 20px;
    }
`;

const LogoWrapper = styled.div`
    align-items: center;
    display: flex;
    font-size: 14px;
    font-weight: 500;
    gap: 20px;
    justify-content: space-between;
    letter-spacing: 1.4px;
    line-height: 114.3%;

    @media (max-width: 991px) {
        flex-wrap: wrap;
    }
`;

const Logo = styled.img`
    margin: auto 0;
    max-width: 100%;
    object-fit: auto;
    object-position: center;
    width: 154px;
  transition: background-color 0.3s ease, transform 0.3s ease;

`;

const Divider = styled.div`
    align-self: stretch;
    background-color: var(--dark-blue, #010d50);
    height: 66px;
    width: 1px;
`;

const Nav = styled.nav`
    align-self: stretch;
    display: flex;
    gap: 20px;
    justify-content: space-between;
    margin: auto 0;
    padding: 7px 1px;

    @media (max-width: 991px) {
        flex-wrap: wrap;
    }
`;

const NavItem = styled.a`
    font-family: DM Sans, sans-serif;
    text-decoration: none;

    &:first-child {
        text-decoration-line: underline;
    }
`;

const ConnectButton = styled.button`
  background-color: #117FC6;
  color: white;
  border-radius: 80px;
  border: none;
  cursor: pointer;
  font: 700 16px/100% DM Sans, sans-serif;
  justify-content: center;
  letter-spacing: 1.6px;
  margin: auto 0;
  padding: 27px 32px;
  text-align: center;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #0e6ba8; /* Darker shade for the hover state */
    transform: scale(1.05); /* Slightly increase the scale */
  }

  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;
export default Navbar;
import * as React from "react";
import styled from "styled-components";
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const socialMediaIcons = [
  { Component: InstagramIcon , alt: "Social Media Icon 1" },
  { Component: GitHubIcon , alt: "Social Media Icon 2" },
  { Component: LinkedInIcon , alt: "Social Media Icon 3" },
];

const menuItems = [
  { label: "Home", href: "/" },
  { label: "Buy/Sell", href: "/Buy-Sell" },
  { label: "Market", href: "/market" },
  { label: "About", href: "/about" }
];
const IMGLogo = styled.img`
    margin: auto 0;
    max-width: 100%;
    object-fit: auto;
    object-position: center;
    width: 200px;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    transform: scale(1.05); /* Slightly increase the scale */
  }
`;

export const Footer= () =>{
    return (
        <Header>
            <Container>
                <TopBar>
                <IMGLogo src="./assets/StockBlocktps2.png" />
                <SocialMediaIcons>
                {socialMediaIcons.map((icon, index) => {
                        const SocialMediaIcon = icon.Component;
                        return <SocialMediaIcon key={index} alt={icon.alt} style= {{color: '#fff'}}/>;
                    })}
                </SocialMediaIcons>
                </TopBar>
                <MainContent>
                <Navigation>
                    <br/>
                    <br/>
                    <MenuTitle>Menu</MenuTitle>
                    <MenuItems>
                    {menuItems.map((item, index) => (
                        <MenuItem key={index}>
                        <MenuLink href={item.href}>{item.label}</MenuLink>
                        </MenuItem>
                    ))}
                    </MenuItems>
                </Navigation>
                <WhitepaperSection>
                    <WhitepaperTitle>Check out our Whitepaper</WhitepaperTitle>
                    <WhitepaperDescription>
                    A whitepaper serves as a legitimate and peer-reviewed explanation
                    of our service
                    </WhitepaperDescription>
                    <WhitepaperButton>Whitepaper</WhitepaperButton>
                </WhitepaperSection>
                </MainContent>
            </Container>
        </Header>
    );
}

const Header = styled.header`
  align-items: center;
  background-color: darkblue;
  box-shadow: 0px -4px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  padding: 56px 60px 0;
  height: 20%;

  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;
const Title = styled.h1`
  color: var(--white, #fff);
`;
const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 1246px;
  flex-direction: column;
  padding: 0 24px;

  @media (max-width: 991px) {
    max-width: 100%;
    padding: 0 20px;
  }
`;

const TopBar = styled.div`
  justify-content: space-between;
  display: flex;
  width: 100%;
  gap: 20px;

  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
  }
`;

const Logo = styled.img`
  width: 154px;
  max-width: 100%;
  margin: auto 0;
`;

const SocialMediaIcons = styled.div`
  display: flex;
  gap: 12px;
`;

const SocialMediaIcon = styled.img`
  width: 36px;
  fill: rgba(255, 255, 255, 0.5);
`;

const MainContent = styled.div`
  display: flex;
  margin-top: 50px;
  margin-bottom: 50px;
  gap: 20px;
  color: var(--white, #fff);
  justify-content: space-between;

  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
    margin-top: 40px;
  }
`;

const Navigation = styled.nav`
  display: flex;
  margin-top: 4px;
  padding-bottom: 34px;
  flex-direction: column;
  text-transform: uppercase;
`;

const MenuTitle = styled.h2`
  border-bottom: 3px solid rgba(255, 255, 255, 0.2);
  padding-bottom: 5px;
  white-space: nowrap;
  letter-spacing: 0.9px;
  padding: 6px 0 37px;
  font: 700 18px/144.4% DM Sans, sans-serif;

  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const MenuItems = styled.ul`
  justify-content: space-between;
  display: flex;
  margin-top: 35px;
  gap: 20px;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 1.4px;
  line-height: 114.3%;
  padding: 0 1px;
`;

const MenuItem = styled.li`
  font-family: DM Sans, sans-serif;
  margin-top: 18px;
`;

const MenuLink = styled.a`
  color: inherit;
  text-decoration: none;

`;

const WhitepaperSection = styled.section`
  align-items: start;
  border-radius: 40px;
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  font-size: 18px;
  font-weight: 700;
  margin-right: -3px;
  padding: 44px 11px 44px 34px;

  @media (max-width: 991px) {
    max-width: 50%;
    padding: 0 20px;
  }
`;

const WhitepaperTitle = styled.h3`
  font-family: DM Sans, sans-serif;
  line-height: 144.4%;
  letter-spacing: 0.9px;
  text-transform: uppercase;
`;

const WhitepaperDescription = styled.p`
  font-family: DM Sans, sans-serif;
  font-weight: 400;
  line-height: 32px;
  margin-top: 28px;
`;

const WhitepaperButton = styled.button`
  justify-content: center;
  border-radius: 80px;
  background-color: var(--blue, #0328ee);
  margin-top: 30px;
  white-space: nowrap;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1.6px;
  padding: 27px 32px;
  font: 16px/100% DM Sans, sans-serif;
  color: inherit;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #0322c9; /* Darker shade for the hover state */
    transform: scale(1.05); /* Slightly increase the scale */
  }

  @media (max-width: 991px) {
    white-space: initial;
    padding: 0 20px;
  }
`;

export default Footer;
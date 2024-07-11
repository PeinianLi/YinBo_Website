import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import Footer from "../components/FooterFigma"
import  Navbar from "../components/NavbarFigma";
import styled from "styled-components";
import { MdCheckCircle } from 'react-icons/md';


export default function Home() {
    return (
        <div>
            <Navbar/>
            <CenteredContainer>
                <div style={{display:"flex", justifyContent:"center", width:"1200px", padding:"50px", flexDirection:"column", alignContent:"center"}}>
                    <Title>
                        Revolutionizing Finance: Welcome to Decentralized Trading
                    </Title>
                    <br/>
                    <br/>
                    <Content>
                        At the heart of the financial revolution, our platform stands as a beacon of innovation and freedom in the stock market. We are proud to introduce you to the future of trading—a fully decentralized stock market that empowers investors with complete control, unparalleled security, and unwavering privacy. Our journey began with a simple yet profound belief: the financial systems of tomorrow must be transparent, inclusive, and free from the constraints of traditional marketplaces.
                    </Content>
                    <br/>
                    <br/>
                    <SubTitle>
                        Our Mission
                    </SubTitle>
                    <Content>
                        Our mission is to democratize finance, making investment opportunities universally accessible and liberating stock trading from the centralized systems that have long dictated terms to investors. We are committed to providing a platform where the power to influence market dynamics is distributed across the network, ensuring fairness, direct peer-to-peer transactions, and a trading environment that operates 24/7, without intermediaries.
                    </Content>
                    <br/>
                    <br/>
                    <SubTitle>
                        How It Works
                    </SubTitle>
                    <Content>
                        Harnessing the power of blockchain technology, our platform operates on a decentralized network that facilitates stock trading with unparalleled security. Every transaction is recorded on a distributed ledger, offering a transparent and immutable record of all trades. This not only enhances security but also significantly reduces the risks associated with fraud and manipulation.
                    </Content>
                    <br/>
                    <br/>
                    <SubTitle>
                        Our Features
                    </SubTitle>
                    <FeaturesList>
                        <FeatureItem><MdCheckCircle />Peer-to-Peer Transactions: Directly connect without middlemen.</FeatureItem>
                        <FeatureItem><MdCheckCircle />Global Access: Trade from anywhere, anytime.</FeatureItem>
                        <FeatureItem><MdCheckCircle />Transparency and Security: Every transaction is secure and transparent.</FeatureItem>
                        <FeatureItem><MdCheckCircle />No Hidden Fees: Experience financial freedom with minimal fees.</FeatureItem>
                        <FeatureItem><MdCheckCircle />Community Governance: Have a say in the platform's future.</FeatureItem>
                    </FeaturesList>
                    <br/>
                    <SubTitle>
                        Join the Revolution
                    </SubTitle>
                    <Content>
                        We are more than just a platform; we are a community of forward-thinkers, innovators, and investors who believe in the power of decentralization. Whether you're a seasoned trader or new to the stock market, our platform offers a new way to invest—free from restrictions, full of possibilities.
                    </Content>
                    <br/>
                    <br/>
                    <SubTitle>
                        The Future Is Decentralized
                    </SubTitle>
                    <Content>
                        The future of stock trading is not just about making investments; it's about making a difference. With our decentralized stock market, we are paving the way for a financial ecosystem that is fair, open, and accessible to all. Join us as we embark on this journey towards a more equitable financial future.
                    </Content>
                    <br/>
                    <br/>
                    <SubTitle>
                        Connect With Us
                    </SubTitle>
                    <Content>
                        Are you ready to take control of your financial destiny? Connect with us to learn more about our platform and how you can be a part of the decentralized finance revolution. Together, let's build a future where everyone has the opportunity to invest and thrive.
                    </Content>
                </div>
            </CenteredContainer>
            <CenteredContainer style={{padding:"0px"}}>
                <SpecialThanks>
                    Special Thanks for our honorable mentor, Omar Rady!
                </SpecialThanks>
            </CenteredContainer>
            <Footer/>
        </div>
    );
}

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 20px 0;
`;

// Styled list item
const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 16px;
  margin-bottom: 15px;
  color: #333; // Adjust the color as needed

  // You can adjust the size, color, etc., of the icon
  svg {
    margin-right: 10px;
    color: #117FC6; // Example color for the icon
  }
`;
const FinanceSection = styled.section`
  background-color: #f0f4f8; // Light background for contrast, adjust as needed
  padding: 40px;
  border-radius: 8px;
  margin: 20px 0;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1); // Optional: Adds some depth
`;

// Styled title
const Title = styled.h1`
  color: #117FC6; // Theme color for titles
  font-size: 40px;
  margin-bottom: 20px;
  text-align: center; // Centers the title

`;

// Styled paragraph
const Content = styled.h3`
  color: #333; // Darker text for readability
  font-size: 16px;
  line-height: 1.5; // Improves readability of longer text
  text-align: justify; // Justify text for a clean look
  font-weight: normal;
`;

const SubTitle = styled.h1`
  color: #1a8ad3; // Theme color for titles
  font-size: 30px;
  margin-bottom: 20px;
  text-align: left; // Centers the title
  width: 1200px;
`;
const CenteredContainer = styled.div`
  display: flex;
  justify-content: center; // Horizontally center the child content
  align-items: center; // Vertically center the child content (optional, based on your design needs)
  flex-direction: column; // Stack children vertically
  width: 100%; // Take the full width of the parent
  padding: 50px; // Maintain padding
  box-sizing: border-box; // Ensure padding doesn't affect the overall width
`;
const SpecialThanks = styled.h1`
  color: rgba(26, 138, 211, 0); // Theme color for titles
  font-size: 30px;
  margin-bottom: 100px;
  text-align: center; // Centers the title
  width: 1200px;
  transition: color 5s ease, transform 5s ease;

  &:hover {
    color: rgb(26, 138, 211);; /* Darker shade for the hover state */
    transform: scale(1.5); /* Slightly increase the scale */
  }
`;

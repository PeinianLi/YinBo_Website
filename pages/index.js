import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import styled from "styled-components";
import { MdCheckCircle } from 'react-icons/md';
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'


export default function Home() {
    return (
        <div>
            <Navbar></Navbar>
            <CenteredContainer>
                <div style={{display:"flex", justifyContent:"center", width:"1200px", padding:"50px", flexDirection:"column", alignContent:"center"}}>
                    <Title>
                        Welcome to my page
                    </Title>
                    <br/>
                    <br/>
                    <Content>
                        Hello, I'm Bo Yin, a dual-degree student at Penn State University pursuing Business Psychology and Economics. I have a strong passion for the automotive industry and extensive experience in automotive sales. I am committed to leveraging my academic knowledge and practical experience to contribute to the success of future employers.
                    </Content>
                    <br/>
                    <br/>
                    <SubTitle>
                        Professional Experience
                    </SubTitle>
                    <FeaturesList>
                        <FeatureItem><MdCheckCircle />Automotive Salesperson Assistant, BYD Auto Sales Company, Beijing, China (June 2020 - August 2021)</FeatureItem>
                        <FeatureItem><MdCheckCircle />Ranked among the top sales performers with monthly sales of 10 units.</FeatureItem>
                        <FeatureItem><MdCheckCircle />Developed and maintained long-term relationships with customers.</FeatureItem>
                        <FeatureItem><MdCheckCircle />Provided excellent customer service and assisted customers in choosing vehicles that best met their needs and budgets.</FeatureItem>
                        <FeatureItem><MdCheckCircle />Conducted detailed vehicle presentations and test drives, highlighting key features and benefits.</FeatureItem>
                        <FeatureItem><MdCheckCircle />Negotiated and signed sales contracts to ensure customer satisfaction and retention.</FeatureItem>
                        <FeatureItem><MdCheckCircle />Assisted in the planning and execution of promotions and sales events.</FeatureItem>
                    </FeaturesList>
                    <br/>
                    <br/>
                    <SubTitle>
                        Skills
                    </SubTitle>
                    <FeaturesList>
                        <FeatureItem><MdCheckCircle />Strong negotiation skills</FeatureItem>
                        <FeatureItem><MdCheckCircle />Proficiency in Excel</FeatureItem>
                        <FeatureItem><MdCheckCircle />Quick to understand and respond to customer needs</FeatureItem>
                        <FeatureItem><MdCheckCircle />Highly patient and willing to learn</FeatureItem>
                    </FeaturesList>
                    <br/>
                    <br/>
                    <SubTitle>
                        Education
                    </SubTitle>
                    <Content>
                        Bachelor's degree in Business Psychology and Economics, Penn State University (Graduating August 2025)
                    </Content>
                </div>
            </CenteredContainer>
            <CenteredContainer style={{padding:"0px"}}>
                <SpecialThanks>
                    You found me!!
                </SpecialThanks>
            </CenteredContainer>
            <Footer></Footer>
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

import styled, { keyframes } from 'styled-components'

export default function Footer() {
    return (
        <div style={{width:"100%"}}>
            <LogoStack>
                <a href={"./"}>
                    <Logo src="./assets/ZhouBoLogo.jpg" alt={"Logo"}/>
                </a>
            </LogoStack>
            <NavStack>
                <StyledLink href="/biography">Biography</StyledLink>
                <StyledLink href="/signup">Contact</StyledLink>
                <StyledLink href="https://www.amazon.com/">Store</StyledLink>
            </NavStack>
            <IconStack>
                <StyledLink href="https://www.facebook.com/"><Icon src="./assets/fb.png" /></StyledLink>
                <StyledLink href="https://twitter.com/"><Icon src="./assets/tw.png" /></StyledLink>
                <StyledLink href="https://www.instagram.com/"><Icon src="./assets/instagram.png" /></StyledLink>
                <StyledLink href="https://discord.com/"><Icon src="./assets/discord.svg" /></StyledLink>
            </IconStack>

        </div>
    )
}


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
`

const Logo = styled.img`
  transition: filter 0.2s ease;
  height: 50px;
  transform: scale(1.0); // Initial scale
  display: block; // Prevent layout shift
  margin: 0 auto; // Center the image if needed
  width: 100%; // Responsive image width
  max-width: 400px; // Maximum width, adjust as needed
  &:hover {
    filter: opacity(0.7); // Apply grayscale effect
    animation: ${zoomInOutIn} 0.4s ease forwards; // Use the defined animation on hover
  }
`

const StyledLink = styled.a`
  color: #333;
  transition: color 0.2s ease;
  text-decoration: none;
  margin: 0 2rem;
  font-weight: lighter;
  &:hover {
    color: #ddd;
  }
`

const LogoStack = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 200px;
  margin-bottom: 100px;
  user-select: none;

`

const NavStack = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
  user-select: none;

`

const IconStack = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 200px;
  user-select: none;

`
const Icon = styled.img`
   transition: filter 0.2s ease;
   height: 30px;
   width: 30px;
   &:hover {
     filter: opacity(0.7);
   }
 `
import { createGlobalStyle } from "styled-components";
import { ThirdwebProvider} from "@thirdweb-dev/react";



export const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Inter', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export default function App({ Component, pageProps }) {
  return (
    
      <>
      <GlobalStyle/>
      <ThirdwebProvider
        clientId="032b4e8c92d3895cc5d0ac6a3d10fd0e"
      >
        <Component {...pageProps} />
      </ThirdwebProvider>
      
      </>
      
  );
}


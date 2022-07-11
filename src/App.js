import { ThemeProvider } from "@mui/material/styles";
import styled from "styled-components";
import "./App.css";
import Header from "./components/Header";
import { theme } from "./components/theme";
import Hero from "./components/Hero";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Container className="App">
        <Hero />
      </Container>
    </ThemeProvider>
  );
}

const Container = styled.div`
  background-color: #00000010;
  min-height: 100vh;
  @media (min-width: 601px){
    padding-top: 63px;
  }
  @media (max-width: 600px){
    padding-top: 48px;
  }
`;

export default App;

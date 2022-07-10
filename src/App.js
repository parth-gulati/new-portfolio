import { ThemeProvider } from "@mui/material/styles";
import styled from "styled-components";
import "./App.css";
import Header from "./components/Header";
import { theme } from "./components/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Container className="App">
      </Container>
    </ThemeProvider>
  );
}

const Container = styled.div`
  background-color: #00000010;
  min-height: 100vh;
`

export default App;

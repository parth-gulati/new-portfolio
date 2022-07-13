import { Grid, Typography, Link, Button } from "@mui/material";
import styled from "styled-components";

const Hero = () => {
  return (
    <div style={{ display: "block" }}>
      <OuterGrid
        container
        spacing={0}
        columns={{ xs: 4, sm: 8, md: 12, lg: 12 }}
      >
        <StyledGrid1 xs={4} sm={2} md={4} lg={3}></StyledGrid1>
        <StyledGrid2 xs={8} sm={6} md={8} lg={9}>
          <Container>
            <Link href="#" sx={{ textDecoration: "none" }}>
              <Typography
                variant="body1"
                sx={{ fontWeight: "bold", fontSize: 12, marginTop: 5 }}
              >
                #RESUME
              </Typography>
            </Link>
            <HeadingContainer>
              <Typography variant="h4">Hi, I'm</Typography>
              <Typography
                variant="h2"
                color="primary"
                sx={{ paddingTop: "5px" }}
              >
                Parth Gulati
              </Typography>
              <Typography
                variant="body1"
                color="#000"
                sx={{
                  fontWeight: "bold",
                  paddingTop: "10px",
                  opacity: 0.3,
                  paddingLeft: "4px",
                }}
              >
                Web Developer and Software Engineer
              </Typography>
              <Typography
                variant="body1"
                color="#000"
                sx={{ paddingTop: "30px", opacity: 0.5, fontWeight: 'normal', display: {xs: 'none', sm: 'block'}}}
              >
                I am a driven web developer and passionate about programming. I
                enjoy solving complex problems and re-engineering inefficient
                processes. I have experience in languages such as Java, C++,
                HTML, CSS, JavaScript and Web Development frameworks such as
                Node.js and React.js. I have practical exposure on working with
                building complex websites from scratch and creating Smart Tokens
                using Solidity and deploying them on the Ethereum Blockchain.
              </Typography>

              <Buttons>
                <Button variant="contained" sx={{margin: '5px'}}>Know More</Button>
                <Button variant="outlined" sx={{margin: '5px'}}>Download CV</Button>
              </Buttons> 
            </HeadingContainer>
          </Container>
        </StyledGrid2>
      </OuterGrid>
    </div>
  );
};

const HeadingContainer = styled.div`
  padding-top: 30px;
  text-align: left;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 30px;
`

const OuterGrid = styled(Grid)`
  @media (min-width: 901px) {
    height: 500px;
  }
  @media (max-width: 899px) {
    height: 600px;
  }
`;

const Container = styled.div`
  padding: 40px 40px;
  width: 100%;
  height: 100%;
`;

const StyledGrid2 = styled(Grid)`
  align-items: center;
  justify-content: center;
  display: flex;
  height: 100%;
`;

const StyledGrid1 = styled(Grid)`
  background-image: url("/images/hero.jpg");
  background-size: contain;
  min-height: 50%;
  @media (max-width: 900px) {
    background-size: cover;
  }
  background-repeat: no-repeat;
`;

export default Hero;

import { Link, Typography, Grid } from "@mui/material";
import styled from "styled-components";
import Box from "./Box";
import CodeIcon from "@mui/icons-material/Code";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import Typewriter from "typewriter-effect";

const About = () => {
  const content = [
    {
      name: <CodeIcon />,
      link: "/images/coding.gif",
      color: "#3788c6",
    },
    {
      name: <SportsEsportsIcon />,
      link: "/images/gaming.gif",
      color: "#9363c5",
    },
    {
      name: <AutoStoriesIcon />,
      link: "/images/reading.gif",
      color: "#0ca48b",
    },
  ];

  return (
    <Container>
      <Link href="#" sx={{ textDecoration: "none" }}>
        <Typography
          variant="body2"
          color="primary"
          sx={{ fontWeight: "bold", marginBottom: "40px" }}
        >
          #ABOUT
        </Typography>
      </Link>
      <Typography
        variant="h3"
        style={{ margin: "25px 0px", fontWeight: "lighter" }}
      >
        <Typewriter
          options={{ loop: true }}
          onInit={(typewriter) => {
            typewriter
              .typeString(
                "I am a <span style='color: #3788c6;'>developer.</span>"
              )
              .pauseFor(2000)
              .deleteChars("Developer.".length)
              .pauseFor(500)
              .typeString('<span style="color: #9363c5;">gamer.</span>')
              .pauseFor(2000)
              .deleteChars("gamer.".length)
              .pauseFor(500)
              .typeString(
                '<span style="color: #0ca48b;">science</span> <span style="color: #00a6cb;">enthusiast.</span>'
              )
              .pauseFor(2000)
              .deleteAll()
              .start();
          }}
        />
      </Typography>

      <Grid
        container
        alignItems="center"
        justifyContent="center"
        columns={{ xs: 4, md: 24 }}
        sx={{ marginTop: "20px", marginBottom: '40px' }}
      >
        {content.map((item) => (
          <Grid xs={4} md={8} align="center">
            <Box link={item.link} color={item.color}>
              {item.name}
            </Box>
          </Grid>
        ))}
      </Grid>

      <Typography variant="body1" sx={{color: '#00000050', fontSize: 15}}>Check out some of my work:</Typography>
      <StyledDiv>
      <StyledImg onClick={()=>{window.location.href='https://www.hackerrank.com/gulati_parth98'}} src='/images/hackerrank.svg'/>
      <StyledImg onClick={()=>{window.location.href='https://github.com/parth-gulati'}} src='/images/github.svg'/>
      <StyledImg tooBig={0.85} onClick={()=>{window.location.href='https://www.linkedin.com/in/parth-gulati-733a15138/'}} src='/images/LinkedIn.svg'/>
      <StyledImg onClick={()=>{window.location.href='https://pattypann.wordpress.com/'}} src='/images/wordpress.svg'/>
      </StyledDiv>
    </Container>
  );
};

const StyledDiv = styled.div`
  display: flex;
  margin-top: 20px;
  width: 300px;
  align-content: center;
  justify-content: space-between;
  flex-direction: row;
`

const StyledImg = styled.img`
  height: 50px;
  transform: scale(${(props)=>props.tooBig || 1});
  opacity: 0.85;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0ms;

  &:hover {
    cursor: pointer;
    transform: scale(${(props)=>props.tooBig? 0.89 : 1.05});
    opacity: 1;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0ms;
  }
`

const Container = styled.div`
  padding: 20px 20px 20px 20px;
  min-width: 0;
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (min-width: 901px) {
    height: 500px;
  }
  @media (max-width: 600px) {
    margin-top: 40px;
  }
  background-color: white;
`;

export default About;

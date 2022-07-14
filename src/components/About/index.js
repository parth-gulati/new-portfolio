import { Link, Typography, Grid } from "@mui/material";
import styled from "styled-components";
import Box from "./Box";
import CodeIcon from "@mui/icons-material/Code";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";

const About = () => {
  const content = [
    {
      name: <SportsEsportsIcon/>,
      link: "/images/gaming.gif",
      color: "#9363c5",
    },
    {
      name: <CodeIcon/>,
      link: "/images/coding.gif",
      color: "#3788c6",
    },
    {
      name: <AutoStoriesIcon/>,
      link: "/images/reading.gif",
      color: "#ca40ad",
    },
  ];

  return (
    <Container>
      <Link href="#" sx={{ textDecoration: "none" }}>
        <Typography variant="body2" color="primary" sx={{ fontWeight: "bold" }}>
          #ABOUT
        </Typography>
      </Link>
      <Typography
        variant="h3"
        style={{ margin: "25px 0px", fontWeight: "lighter" }}
      >
        I specialize in <span style={{ color: "#0ca48b" }}>design</span> and{" "}
        <span style={{ color: "#0ca48b" }}>development</span>
      </Typography>
      <Typography
        variant="body2"
        style={{ margin: "0px 0px 10px", fontWeight: "normal", opacity: 0.7, fontSize: 12 }}
      >
        Also, this pretty much sums up my life.
      </Typography>

      <Grid
        container
        alignItems="center"
        justifyContent="center"
        columns={{ xs: 4, md: 24 }}
        sx={{ marginTop: "20px" }}
      >
        {content.map((item) => (
          <Grid xs={4} md={8} align="center">
            <Box link={item.link} color={item.color}>
              {item.name}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

const Container = styled.div`
  padding: 20px 20px 20px 20px;
  min-width: 0;
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 600px) {
    margin-top: 40px;
  }
  background-color: white;
`;

export default About;

import { Link, Typography, Grid } from "@mui/material";
import styled from "styled-components";
import Box from "./Box";

const About = () => {
  const colors = [
    "#9363c5",
    "#3788c6",
    "#f29f58",
    "#ca40ad",
    "#2e7bb9",
    "#7bcee5",
  ];
  const skills = [
    {
      name: "Reactjs",
      value: 95,
      color: colors[0],
    },
    {
      name: "Axios",
      value: 95,
      color: colors[1],
    },
    {
      name: "Nodejs",
      value: 70,
      color: colors[2],
    },
    {
      name: "Java and Springboot",
      value: 75,
      color: colors[3],
    },
    {
      name: "Vue.js",
      value: 75,
      color: colors[4],
    },
    {
      name: "MongoDB",
      value: 80,
      color: colors[5],
    },
  ];

  return (
    <Container>
      <Link href="#" sx={{ textDecoration: "none" }}>
        <Typography variant="body2" color="primary" sx={{ fontWeight: "bold" }}>
          #ABOUT
        </Typography>
      </Link>
      <Typography variant="h3" style={{ margin: "15px 0px" }}>
        I specialize in <span style={{ color: "#0ca48b" }}>design</span> and{" "}
        <span style={{ color: "#0ca48b" }}>development</span>
      </Typography>
      <Typography
        variant="body1"
        sx={{ textAlign: "center", marginBottom: "30px", opacity: 0.7 }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Typography>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        columns={{ xs: 4, sm: 9, md: 12, lg: 24 }}
      >
        {skills.map((item) => (
          <InnerGrid align="center" xs={2} sm={3} md={2} lg={3}>
            <Box
              skillName={item.name}
              skillValue={item.value}
              color={item.color}
            />
          </InnerGrid>
        ))}
      </Grid>
    </Container>
  );
};

const InnerGrid = styled(Grid)`
  margin-bottom: 20px;
`;

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

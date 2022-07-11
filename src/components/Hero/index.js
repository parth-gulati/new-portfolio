import { Grid } from "@mui/material";
import styled from "styled-components";

const Hero = () => {
  return (
    <div style={{ display: "block", backgroundColor: "#000" }}>
      <OuterGrid container spacing={0}>
        <StyledGrid1 xs={6}></StyledGrid1>
        <Grid xs={6}>Since Day1</Grid>
      </OuterGrid>
    </div>
  );
};

const OuterGrid = styled(Grid)`
  @media (min-width: 901px) {
    height: 500px;
  }
  @media (max-width: 899px) {
    height: 260px;
  }
`;

const StyledGrid1 = styled(Grid)`
  background-image: url("/images/hero.jpg");
  background-size: contain;
  background-repeat: no-repeat;
`;

export default Hero;

import { Typography } from "@mui/material";
import styled from "styled-components";

const Box = (props) => {
  return (
    <Container bgColor={props.color}>
        <Typography variant="h3" sx={{color: '#000', opacity: 0.6, fontWeight: 'bold', marginTop: '10px'}}>
            {props.skillValue}%
        </Typography>
      <Typography variant="h6" sx={{ color: props.color }}>
        {props.skillName}
      </Typography>
    </Container>
  );
};

const Container = styled.div`
  text-align: center;
  padding: 20px 20px;
  background-color: ${(props) => props.bgColor + "40"};
  border: 2px solid ${(props) => props.bgColor + '60'};
  border-radius: 4px;
  height: 100px;
  width: 100px;
  &:hover {
    transform: scale(1.05);
    transition-duration: 0.25s;
  }
`;

export default Box;

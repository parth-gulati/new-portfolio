import styled from "styled-components";

const Services = () => {
  return <Container>Content</Container>;
};

const Container = styled.div`
  @media (min-width: 901px) {
    height: 500px;
  }
  @media (max-width: 899px) {
    height: 600px;
  }
`;

export default Services;

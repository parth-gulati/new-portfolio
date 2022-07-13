import styled from 'styled-components'

const About = () => {
    return (<Container>
        White background
    </Container>)
}

const Container = styled.div`
    @media (max-width: 600px) {
        margin-top: 40px;
    }
    height: 200px;
    background-color: white;
`

export default About;
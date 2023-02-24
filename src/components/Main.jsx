import styled from "styled-components";

import Container from "./Container";

const Wrapper = styled.section`
    max-width: 100%;
    height: 100vh;
    padding-bottom: 50px;
    background-image: var(--desktop);
    background-color: var(--colors-bg);
    background-position: top center;
    background-size: contain;
    background-repeat: no-repeat;
    @media (max-width: 576px) {
        background-image: var(--mobile);
`;

const Main = ({children}) => {

    return (  
        <Wrapper>
            <Container>{children}</Container>
        </Wrapper>
    );
}

export default Main;
import styled from "styled-components";

import Container from "./Container";
import desktop from "../images/bg-desktop-light.jpg";
import mobile from "../images/bg-mobile-light.jpg";

const Wrapper = styled.section`

    max-width: 100%;
    height: 100%;
    padding-bottom: 50px;
    background-color: var(--colors-bg);
    background-image: url(${desktop});
    background-position: top center;
    background-size: contain;
    background-repeat: no-repeat;
    @media (max-width: 576px) {
        background-image: url(${mobile});
`;

const Main = ({children}) => {

    return (  
        <Wrapper>
            <Container>{children}</Container>
        </Wrapper>
    );
}

export default Main;
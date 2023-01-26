import styled from "styled-components";

import Container from "./Container";
import desktop from "../images/bg-desktop-light.jpg";
import mobile from "../images/bg-mobile-light.jpg";

const Wrapper = styled.section`
    position: relative;
    max-width: 100%;
`;

const BackgroundImg = styled.div`
    height: 300px;
    background-image: url(${desktop});
    background-size: cover;
    @media (max-width: 375px) {
        background-image: url(${mobile});
    }
    `;

const Main = ({children}) => {

    return (  
        <Wrapper>
            <Container>{children}</Container>
            <BackgroundImg />
        </Wrapper>
    );
}

export default Main;
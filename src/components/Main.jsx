import styled from "styled-components";
import desktop from "../images/bg-desktop-light.jpg";
import mobile from "../images/bg-mobile-light.jpg";

const Wrapper = styled.section`
    max-width = 1440px;
    margin = 0 auto;

`;

const BackgroundImg = styled.div`
    height: 300px;
    background-image: url(${desktop});
    background-size: cover;
    @media (max-width: 375px) {
        background-image: url(${mobile});
    }
    `;

const Main = () => {

    return (  
        <Wrapper>
            <BackgroundImg />
        </Wrapper>
    );
}

export default Main;
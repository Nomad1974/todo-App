import styled from "styled-components";

const Container = styled.div`
    width: 540px; 
    margin: 0 auto;
    padding-top: 75px;
    @media (max-width: 768px) {
        padding-top: 40px;
        width: 400px;
    }
    @media (max-width: 570px) {
        width: 325px;
    }
    `;

export default Container;
import styled from "styled-components";

const Wrapper = styled.footer`
    margin-top: 20px;
    padding-top: 21px;
    background-color: var(--colors-bg);
    border-radius: var(--radii);
    background-color: var(--colors-list-bg);
    height: 65px;
    box-shadow: var(--shadow);
    @media (max-width: 768px) {
        height: 45px;
        padding-top: 10px;
    }
`;
/* padding: 13px; */
const FilterElem = styled.span`
    margin: auto 0;
    display: flex;
    flex-direction: row; 
    justify-content: space-around;
`;

const Span = styled.span` 
    height: 100%;
    font-size: var(--fs-md);
    font-weight: var(--fw-bold);
    color: var(--colors-text-title);
    cursor: pointer;
    : hover {
        color: var(--colors-title_hover);
    }
`;

const Footer = () => {
    return (  
        <Wrapper>
            <FilterElem>
                <Span style={{color: "rgb(166,128,241)"}}>All</Span>
                <Span>Active</Span>
                <Span>Completed</Span>
            </FilterElem>
        </Wrapper>
    );
}

export default Footer;
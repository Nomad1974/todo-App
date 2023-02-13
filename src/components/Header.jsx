import styled from "styled-components";

import ThemeSwitcher from "../theme/ThemeSwitcher";

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    `;

const Hading = styled.span`
    color: rgb(251, 252, 254);
    font-size: var(--fs-hd);
    font-weight: var(--fw-bold);
`;


const Header = () => {

    return (
        <Wrapper>
            <Hading>TODO</Hading>
            <ThemeSwitcher />
        </Wrapper>
    );
}

export default Header;
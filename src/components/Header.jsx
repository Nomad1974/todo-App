import styled from "styled-components";
import { ReactComponent as Icon} from "../images/icon-sun.svg";

const Header = () => {
    const Wrapper = styled.div`
        display: flex;
        width: 540px;
        flex-direction: row;
        justify-content: space-between;
    `
    const Hading = styled.span`
        color: var(--colors-text);
        font-size: var(--fs-hd);
        font-weight: var(--fw-bold);
    `;

    return (
        <Wrapper>
            <Hading>TODO</Hading>
            <Icon style={{cursor: "pointer"}}/>
        </Wrapper>
    );
}

export default Header;
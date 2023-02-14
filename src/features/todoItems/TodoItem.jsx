import styled from "styled-components";
import { ReactComponent as Cross } from "../../icons/icon-cross.svg";

const IconWrapper = styled.span`
    margin: auto 25px;
    cursor: pointer;
    @media (max-width: 768px) {
        margin: auto 20px;
    }
`;

const Item = styled.li`
    display: flex;
    place-content: baseline;
    justify-content: space-between;
    height: 65px;
    border-bottom: 1px solid var(--colors-list-bottom-borber);
    color: var(--colors-text);
    font-size: var(--fs-md);
    font-weight: var(--fw-normal);
    @media (max-width: 768px) {
        height: 45px;
    }
`;

const Input = styled.input`
    border: 0;
    clip: rect(0 0 0 0);
    clippath: inset(50%);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
`;

const StyledCheckbox = styled.div`
display: inline-block;
    margin: 0 20px;
    border: 1px solid rgb(236,235,240);
    width: 25px;
    height: 25px;
    border-radius: 50%;
    cursor: pointer;
    : hover{
        border-color: var(--colors-main);
    }
    @media (max-width: 768px) {
        width: 20px;
    height: 20px;
    `;

    const Span = styled.span`
        cursor: pointer;
        margin: auto 0;
    `;

const Label = styled.label`
    display: flex;
    align-items: center
`;

const TodoItem = () => {
    return ( 
        <Item>
            <Label>
                <Input type="checkbox"/> 
                <StyledCheckbox />
                <Span>first todo and last one also</Span>
            </Label>
            <IconWrapper>
                <Cross />
            </IconWrapper>
        </Item> 
    );
}

export default TodoItem;
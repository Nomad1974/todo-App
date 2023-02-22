import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { clearComplete, removeTodo, toggleTodo } from "./todoSlice";

import { ReactComponent as Cross } from "../../icons/icon-cross.svg";
import { ReactComponent as CheckedIcon } from "../../icons/icon-check.svg";

const Content = styled.ul`
    list-style-type: none;
    width: 100%;
    margin-top: 25px;
    border-radius: var(--radii);
    background-color: var(--colors-list-bg);
    padding-left: 0;
    box-shadow: var(--shadow);
`;

const LastItem = styled.span`
    height: 50px;
    color: var(--colors-text-title);
    display: flex;
    flex-direction: row; 
    justify-content: space-around;
    align-items: center;
    @media (max-width: 768px) {
        height: 45px;
        padding-top: 10px;
    }
`;

const FirstElem = styled.span`
    place-content: center;
    font-size: var(--fs-md);
    font-weight: var(--fw-normal);
    cursor: pointer;
`;

const LastElem = styled.span`
    font-size: var(--fs-md);
    font-weight: var(--fw-bold);
    font-size: var(--fs-md);
    cursor: pointer;
    : hover {
        color: var(--colors-title_hover);
    }
`;
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
// делаем чекбокс и скрываем его для стилизации своего компонента
const Input = styled.input.attrs({
    type: 'checkbox'
})`
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

const Span = styled.span`
        cursor: pointer;
        margin: auto 0;
    `;

    const Label = styled.label`
    display: flex;
    align-items: center; 
    text-decoration: ${props => props.checked ? 'line-through': ''};
    color: ${props => props.checked ? 'var(--colors-text-completed)' : ''};
`;

const StyledCompletedCheckbox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 20px;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    cursor: pointer;
    background-color: var(--colors-main);
    @media (max-width: 768px) {
        width: 20px;
    height: 20px;
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

const TodoItemList = (props) => {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    return (
        <Content>
            {todos.map((todo) => (
                <Item key={todo.id}>
                    <Label checked={todo.completed}>
                        <Input 
                            onChange={() => dispatch(toggleTodo(todo.id))} {...props}/>
                        {todo.completed ? <StyledCompletedCheckbox><CheckedIcon /></StyledCompletedCheckbox> : <StyledCheckbox />}
                        <Span >
                            {todo.title} 
                        </Span>
                    </Label>
                    <IconWrapper onClick={() => dispatch(removeTodo(todo.id))}>
                        <Cross />
                    </IconWrapper>
                </Item>
            ))}
            <LastItem>
                <FirstElem>5 items left</FirstElem>
                <LastElem onClick={() => dispatch(clearComplete())}>
                    Clear Completed
                </LastElem>
            </LastItem>
        </Content>
    );
}

export default TodoItemList;
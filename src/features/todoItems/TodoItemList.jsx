import styled from "styled-components";

import TodoItem from "./TodoItem";

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
    height: 65px;
    padding-top: 21px;
    color: var(--colors-text-title);
    display: flex;
    flex-direction: row; 
    justify-content: space-around;
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

const TodoItemList = () => {
    return ( 
    <Content>
        <TodoItem id="1" />
        <TodoItem id="2" />
        <LastItem>
            <FirstElem>5 items left</FirstElem>
            <LastElem>Clear Completed</LastElem>
        </LastItem>
    </Content>
    );
}

export default TodoItemList;
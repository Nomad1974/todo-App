import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { clearComplete } from "./todoSlice";

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

const ClearingComponent = () => {
    const dispatch = useDispatch();
    const allTodos = useSelector(state => state.todos);
    const activeTodos = allTodos.filter(todo => !todo.completed);

    return ( 
    <LastItem>
        <FirstElem>{activeTodos.length} items left</FirstElem>
        <LastElem onClick={() => dispatch(clearComplete())}>
            Clear Completed
        </LastElem>
    </LastItem>
    );
}

export default ClearingComponent;
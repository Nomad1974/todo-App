import styled from "styled-components";

import useClear from "./useClear";

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
    const [activeTodos, clearCompleted] = useClear();

    return ( 
    <LastItem>
        <FirstElem>{activeTodos.length} items left</FirstElem>
        <LastElem onClick={clearCompleted}>
            Clear Completed
        </LastElem>
    </LastItem>
    );
}

export default ClearingComponent;
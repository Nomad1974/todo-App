import styled from "styled-components";

const Item = styled.li`
    
    height: 65px;
    border-bottom: 1px solid rgb(229, 228, 223);
    color: var(--text-color);
    font-size: var(--fs-md);
    font-weight: var(--fw-normal);
    
`;

const TodoItem = () => {
    return ( 
            <Item>Hello</Item> 
    );
}

export default TodoItem;
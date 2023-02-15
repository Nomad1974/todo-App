import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addTodo } from "./todoSlice";

const Form = styled.form`
    margin-top: 20px;
`;

const Input = styled.input.attrs({
    type: 'text',
    name: 'title',
    placeholder: ' What I have to do',
})`
    margin: auto 0;
    height: 35px;
    width: 85%;
    border-radius: var(--radii);
    border: none;
    outline: none;    
    color: var(--colors-text);
    background-color: var(--colors-list-bg);
    font-size: var(--fs-md);
`;

    const Wrapper = styled.span`
        display: flex;
        flex-direction: row;
        border-radius: var(--radii);
        background-color: var(--colors-list-bg);
        height: 65px;
        @media (max-width: 768px) {
            height: 45px;
        }
    `;

    const Icon = styled.div`
        margin: auto 20px;
        border: 1px solid var(--colors-icon);
        border-radius: 50%;
        width: 25px;
        height: 25px;
        @media (max-width: 768px) {
            width: 20px;
        height: 20px;
        }
    `;

const NewTodo = () => {
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addTodo(event.target.title.value));
        // очищаем инпут
        event.target.reset();
    }
    

    return (  
        <Form onSubmit={handleSubmit}>
            <Wrapper>
                <Icon />
                <Input></Input>
            </Wrapper>
        </Form>
    );
}

export default NewTodo;
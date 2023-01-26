import styled from "styled-components";

const Form = styled.form`
    margin-top: 50px;
    
    
`;

const Input = styled.input.attrs({
    type: 'text',
    placeholder: ' What I have to do',
})`
    height: 35px;
    width: 540px;
    border-radius: var(--radii);
    border: none;
    outline: none;
    box-shadow: var(--shadow);
    font-size: var(--fs-md);      
`;

const ItemAddForm = () => {
    return (  
        <Form>
            <Input></Input>
        </Form>
    );
}

export default ItemAddForm;
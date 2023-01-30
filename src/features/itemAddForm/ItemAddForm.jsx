import styled from "styled-components";
// сделать медиа запросы на уменьшение 
const Form = styled.form`
    margin-top: 50px;
`;

const Input = styled.input.attrs({
    type: 'text',
    placeholder: ' What I have to do',
})`
    margin: auto 0;
    height: 35px;
    width: 85%;
    border-radius: var(--radii);
    border: none;
    outline: none;    
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

    /* margin: 20px 26px; */
    const Icon = styled.div`
        margin: auto;
        border: 1px solid var(--colors-icon);
        border-radius: 50%;
        width: 25px;
        height: 25px;
        @media (max-width: 768px) {
            width: 20px;
        height: 20px;
        }
    `;

const ItemAddForm = () => {
    return (  
        <Form>
            <Wrapper>
                <Icon />
                <Input></Input>
            </Wrapper>
        </Form>
    );
}

export default ItemAddForm;
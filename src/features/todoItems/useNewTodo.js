import { useDispatch } from "react-redux";

import { addTodo } from "./todoSlice";


const useNewTodo = () => {
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addTodo(event.target.title.value));
        // очищаем инпут
        event.target.reset();
    }

    return [handleSubmit];
}

export default useNewTodo;
import { useDispatch } from "react-redux";

import { addTodo } from "./todoSlice";


const useNewTodo = () => {
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        // защита от создания пустой тудушки
        if (event.target.title.value) {
            dispatch(addTodo(event.target.title.value));
            // очищаем инпут
            event.target.reset();
        }
    }

    return [handleSubmit];
}

export default useNewTodo;
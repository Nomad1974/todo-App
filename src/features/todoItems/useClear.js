import { useDispatch, useSelector } from "react-redux";
import { clearComplete } from "./todoSlice";

const useClear = () => {
    const dispatch = useDispatch();
    const allTodos = useSelector(state => state.todos);
    const activeTodos = allTodos.filter(todo => !todo.completed);

    const clearCompleted = () => {
        dispatch(clearComplete());
    }

    return [activeTodos, clearCompleted];
}

export default useClear;
import { useDispatch, useSelector } from 'react-redux';
import { removeTodo, selectVisibleTodos, toggleTodo } from './todoSlice';

const useTodoItemList = () => {
    const dispatch = useDispatch();
    const activeFilter = useSelector((state) => state.filter);
    const todos = useSelector((state) =>
        selectVisibleTodos(state, activeFilter)
    );

    const onDelete = (id) => dispatch(removeTodo(id));

    const onToggleTodo = (id) => dispatch(toggleTodo(id))

    return [todos, onDelete, onToggleTodo];
}

export default useTodoItemList;
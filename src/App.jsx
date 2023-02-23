
import Filter from "./features/filters/Filter";
import Header from "./components/Header";
import Main from "./components/Main";
import NewTodo from "./features/todoItems/NewTodo";
import TodoItemList from "./features/todoItems/TodoItemList";

const App = () => {
    return (
        <Main>
            <Header />
            <NewTodo />
            <TodoItemList />
            <Filter />
        </Main>
    );
}

export default App;

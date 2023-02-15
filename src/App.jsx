
import Footer from "./components/Footer";
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
            <Footer />
        </Main>
    );
}

export default App;

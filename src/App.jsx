
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import ItemAddForm from "./features/itemAddForm/ItemAddForm";
import TodoItemList from "./features/todoItems/TodoItemList";

const App = () => {
    return (
        <Main>
            <Header />
            <ItemAddForm />
            <TodoItemList />
            <Footer />
        </Main>
    );
}

export default App;

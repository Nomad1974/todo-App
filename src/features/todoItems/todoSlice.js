import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [];

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: {
            reducer: (state, action) => {
                state.push(action.payload)
            },
            prepare: (title) => ({
                payload: {
                    title,
                    id: nanoid(),
                    completed: false,
                    important: false,
                    checked: false,
                }
            })
        },
        removeTodo: (state, action) => {
            const id = action.payload;
            return state.filter(todo => todo.id !== id);
        },
        toggleTodo: (state, action) => {
            const id = action.payload;
            const todo = state.find(todo => todo.id === id);
            todo.completed = !todo.completed;
        },
        clearComplete: () => initialState, 
    }
});

export const {
    addTodo,
    removeTodo,
    clearComplete,
    toggleTodo
} = todoSlice.actions;

export const todoReducer = todoSlice.reducer;


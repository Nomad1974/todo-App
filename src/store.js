import { configureStore } from '@reduxjs/toolkit';
import { todoReducer } from './features/todoItems/todoSlice';

import { themeReducer } from './theme/themeSlice';

const store = configureStore({
  reducer: {
    theme: themeReducer,
    todos: todoReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;

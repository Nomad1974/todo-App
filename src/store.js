import { configureStore } from '@reduxjs/toolkit';

import { todoReducer } from './features/todoItems/todoSlice';
import { themeReducer } from './theme/themeSlice';
import { filterReducer } from './features/filters/filterSlice';

const store = configureStore({
  reducer: {
    theme: themeReducer,
    todos: todoReducer,
    filter: filterReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;

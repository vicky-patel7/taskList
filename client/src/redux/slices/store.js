import { configureStore } from "@reduxjs/toolkit";
import taskList from './crudSlice';


const store = configureStore({
  reducer : {
    taskList : taskList
  }
})

export default store;
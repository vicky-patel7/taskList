// crudSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// reading the data from the server endpoint
export const readTaskList = createAsyncThunk('readTaskList', async (rejectWithValue) => {
  console.log('Reading task list');
  const response = await fetch('http://localhost:8000/api/tasks', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  try {
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    return rejectWithValue(err.message);
  }
});


// creating a new task
export const createTask = createAsyncThunk('createTask', async (data, { rejectWithValue }) => {
  console.log('Creating task');
  // const response = await fetch('https://65060a6eef808d3c66f0c4c6.mockapi.io/task', {
  const response = await fetch('http://localhost:8000/api/tasks', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  });
  try {
    const result = await response.json();
    return result;
  } catch (err) {
    return rejectWithValue(err);
  }
});

// deleting the added task from the server endpoint
export const deleteTask = createAsyncThunk('deleteTask', async (id, { rejectWithValue }) => {
  console.log('Deleting the task');
  const response = await fetch(`http://localhost:8000/api/tasks/${id}`, { method: 'DELETE' });
  try {
    const result = await response.json();
    return result;
  } catch (err) {
    return rejectWithValue(err);
  }
});

// updating the task of the server
export const updateTask = createAsyncThunk('updateTask', async (data, { rejectWithValue }) => {
  console.log('Updating the task', data);
  const response = await fetch(
    `http://localhost:8000/api/tasks/${data._id}`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    }
  );
  try {
    const result = await response.json();
    return result;
  } catch (err) {
    return rejectWithValue(err);
  }
});


export const taskList = createSlice({
  name: 'taskList',
  initialState: {
    taskList: [],
    loading: false,
    error: null
  },
  extraReducers: {
    // creating
    [createTask.pending]: (state) => {
      state.loading = true;
    },
    [createTask.fulfilled]: (state, action) => {
      state.loading = false;
      state.taskList.push(action.payload);
    },
    [createTask.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    // reading
    [readTaskList.pending]: (state) => {
      state.loading = true;
    },
    [readTaskList.fulfilled]: (state, action) => {
      state.loading = false;
      state.taskList = action.payload;
    },
    [readTaskList.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    // deleting 
    [deleteTask.pending]: (state) => {
      state.loading = true;
    },
    [deleteTask.fulfilled]: (state, action) => {
      state.loading = false;
      const { _id } = action.payload;
      console.log(action.payload);
      state.taskList = state.taskList.filter((task) => (task._id !== _id));
    },
    [deleteTask.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // updating
    [updateTask.pending]: (state) => {
      state.loading = true;
    },
    [updateTask.fulfilled]: (state, action) => {
      state.loading = false;
      state.taskList = state.taskList.map((el) => (
        el._id === action.payload._id ? action.payload : el
      ))
    },
    [updateTask.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  }
});

export default taskList.reducer;
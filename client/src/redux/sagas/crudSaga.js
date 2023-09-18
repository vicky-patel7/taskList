// // crudSaga.js
// import { takeLatest, call, put } from 'redux-saga/effects';
// import {
//   addTask,
//   updateTask,
//   deleteTask,
//   setLoading,
//   setError,
// } from '../slices/crudSlice';

// // API functions to interact with your backend
// const api = {
//   createTask: async (data) => {
//     const response = await fetch('/api/tasks', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(data),
//     });
//     return response.json();
//   },
//   fetchTasks: async () => {
//     const response = await fetch('/api/tasks');
//     return response.json();
//   },
//   updateTask: async (id, data) => {
//     const response = await fetch(`/api/tasks/${id}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(data),
//     });
//     return response.json();
//   },
//   deleteTask: async (id) => {
//     const response = await fetch(`/api/tasks/${id}`, {
//       method: 'DELETE',
//     });
//     return response.json();
//   },
// };

// function* createTaskSaga(action) {
//   try {
//     yield put(setLoading(true));
//     const newTask = yield call(api.createTask, action.payload);
//     yield put(addTask(newTask));
//     yield put(setLoading(false));
//   } catch (error) {
//     yield put(setError(error.message));
//   }
// }

// function* fetchTasksSaga() {
//   try {
//     yield put(setLoading(true));
//     const tasks = yield call(api.fetchTasks);
//     yield put(addTask(tasks));
//     yield put(setLoading(false));
//   } catch (error) {
//     yield put(setError(error.message));
//   }
// }

// function* updateTaskSaga(action) {
//   try {
//     yield put(setLoading(true));
//     const updatedTask = yield call(api.updateTask, action.payload.id, action.payload.data);
//     yield put(updateTask(updatedTask));
//     yield put(setLoading(false));
//   } catch (error) {
//     yield put(setError(error.message));
//   }
// }

// function* deleteTaskSaga(action) {
//   try {
//     yield put(setLoading(true));
//     yield call(api.deleteTask, action.payload);
//     yield put(deleteTask(action.payload));
//     yield put(setLoading(false));
//   } catch (error) {
//     yield put(setError(error.message));
//   }
// }

// export function* watchCrud() {
//   yield takeLatest('crud/createTask', createTaskSaga);
//   yield takeLatest('crud/fetchTasks', fetchTasksSaga);
//   yield takeLatest('crud/updateTask', updateTaskSaga);
//   yield takeLatest('crud/deleteTask', deleteTaskSaga);
// }

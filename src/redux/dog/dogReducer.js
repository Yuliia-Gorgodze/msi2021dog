import { createReducer } from '@reduxjs/toolkit'
import {
  getDogRequest,
  getDogSuccess,
  getDogError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactErrors,
  filterAction,
} from './dogActions'

const dogReducer = createReducer([], {
//   [getContactsSuccess]: (_, { payload }) => payload,
//   [addContactSuccess]: (state, { payload }) => [...state, payload],
//   [deleteContactSuccess]: (state, { payload }) =>
//     state.filter((order) => order.id !== payload),
})



export default dogReducer
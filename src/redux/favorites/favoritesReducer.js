import { createReducer } from '@reduxjs/toolkit'
// import {
//   getFavoritesDogRequest,
//   getFavoritesDogSuccess,
//   getFavoritesDogError,
//   addFavoritesDogRequest,
//   addFavoritesDogSuccess,
//   addFavoritesDogError,
//   deleteFavoritesDogRequest,
//   deleteFavoritesDogSuccess,
//   deleteFavoritesDogErrors,
  
// } from './favoritesActions'

const favoriteDogReducer = createReducer(['2223'], {
//   [getContactsSuccess]: (_, { payload }) => payload,
//   [addContactSuccess]: (state, { payload }) => [...state, payload],
//   [deleteContactSuccess]: (state, { payload }) =>
//     state.filter((order) => order.id !== payload),
})
const likesDogsReducer = createReducer(['dfh'], {
    //   [getContactsSuccess]: (_, { payload }) => payload,
    //   [addContactSuccess]: (state, { payload }) => [...state, payload],
    //   [deleteContactSuccess]: (state, { payload }) =>
    //     state.filter((order) => order.id !== payload),
    })
const disLikesDogsReducer = createReducer (['adgtnhzatnhj'] ,{
      //   [getContactsSuccess]: (_, { payload }) => payload,
    //   [addContactSuccess]: (state, { payload }) => [...state, payload],
    //   [deleteContactSuccess]: (state, { payload }) =>
    //     state.filter((order) => order.id !== payload),
})

export default {disLikesDogsReducer, likesDogsReducer, favoriteDogReducer}
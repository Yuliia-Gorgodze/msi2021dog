import { createReducer } from '@reduxjs/toolkit'
import {
  getImagesRequest,getImagesSuccess, getImagesError, getImagesFormSuccess, getBreedImagesSuccess
} from './dogActions'

const dogReducer = createReducer([], {
  [getImagesSuccess]: (_, { payload }) => payload,
  [getImagesFormSuccess]: (_, {payload}) => payload,
  [getBreedImagesSuccess]: (_, {payload}) => payload,
})



export default dogReducer
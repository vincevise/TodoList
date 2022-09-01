import {configureStore} from '@reduxjs/toolkit'
import todoReducer from './todoSlice'
import DetailsReducer from '../component/DetailsSlice';

const store = configureStore({
    reducer:{
        todo:todoReducer,
        details:DetailsReducer
    }
})

export default store;
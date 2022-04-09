import {configureStore} from '@reduxjs/toolkit';
import personReducer from './features/personSlice';
import talkReducer from './features/talkSlice';



//configure store in this store
export default configureStore({
    reducer: {
        person : personReducer,
         talk:talkReducer
        },
    
})
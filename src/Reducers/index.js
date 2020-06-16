import storage from 'redux-persist/lib/storage'
import { persistCombineReducers } from 'redux-persist'

import Contact from '../Container/Contact/Reducer';

const reducers = {
    contact: Contact
}

export const persistConfig = {
    key: 'DOODLEBLUE_ASSIGNMENT.0.0.1',
    storage,
    blacklist: [
        'contact'
    ]
}

const appReducer = persistCombineReducers(persistConfig, reducers)

const rootReducer = (state, action) => {
    return appReducer(state, action)
};

export default rootReducer;
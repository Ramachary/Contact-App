import * as types from './ActionTypes';

import initialState from './ReducerInitialState';

export default (state = initialState, action) => {
    switch (action.type) {
        case types.CREATE_NEW_CONTACT:
        case types.DELETE_CONTACT:
        case types.EDIT_CONTACT:
            return {
                ...state,
                details: action.payload,
            }
        default:
            return state
    }
}
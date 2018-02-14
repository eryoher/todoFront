import * as types from '../actions/types';
const INITIAL_STATE = {};

export default function (state = INITIAL_STATE, action){
    switch (action.type) {
        case types.FETCH_DATA_LIST:
            return {...state, data:action.payload.data };
        case types.ADD_TODO:
            return {...state, data:action.payload.data };
        case types.UPDATE_TODO:
            return {...state, data:action.payload.data };
        case types.REMOVE_TODO:
          return {...state, data:action.payload.data };
        case types.COMPLETE_TODO:
          return {...state, data:action.payload.data };
        case types.COMPLETE_ALL_TODO:
          return {...state, data:action.payload.data };
        default:
          return state;
    }

    return state;
}

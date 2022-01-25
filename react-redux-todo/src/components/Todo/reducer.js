import {ADD_TODO_SUCCESS, ADD_TODO_LOADING,ADD_TODO_ERROR, GET_TODO_ERROR, GET_TODO_LOADING, GET_TODO_SUCCESS, REMOVE_TODO,UPDATE_TODO} from "./ActionType";

const init = {loading:false, todo:[],error:false}
export const reducer=(state=init, {type, payload}) => {
    switch (type) {
        case ADD_TODO_LOADING:
            return {
                ...state,
                loading: true
            }
        case ADD_TODO_SUCCESS:
            return {
                ...state,
                todo: [...state.todo, payload],
                loading: false
            }
        case ADD_TODO_ERROR:
            return {
                ...state,
                loading: false,
                error: true
            }
            case GET_TODO_LOADING:
                return {
                    ...state,
                    loading: true
                }
            case GET_TODO_SUCCESS:
                return {
                    ...state,
                    todo: payload,
                    loading: false
                }
            case GET_TODO_ERROR:
                return {
                    ...state,
                    loading: false,
                    error: true
                }
        
        
        default :
            return state
    }
};

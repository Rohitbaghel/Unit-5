import {ADD_TODO_ERROR, ADD_TODO_LOADING, ADD_TODO_SUCCESS, GET_TODO_ERROR, GET_TODO_LOADING, GET_TODO_SUCCESS, REMOVE_TODO,UPDATE_TODO} from "./ActionType";


export const AddTodoSuccess=(data) => ({
    type: ADD_TODO_SUCCESS,
    payload:data
});

export const addTodoLoading=() => ({
    type: ADD_TODO_LOADING,
    
});

export const AddTodoError=(error) => ({
    type: ADD_TODO_ERROR,
    payload:error
});




export const GetTodoSuccess=(data) => ({
    type: GET_TODO_SUCCESS,
    payload:data
});

export const GetTodoLoading=() => ({
    type: GET_TODO_LOADING,
    
});

export const GetTodoError=(error) => ({
    type: GET_TODO_ERROR,
    payload:error
});

export const UpdateTodo=(id) => ({
    type: UPDATE_TODO,
    payload:id
});

export const RemoveTodo=(id) => ({
    type: REMOVE_TODO,
    payload:id
});


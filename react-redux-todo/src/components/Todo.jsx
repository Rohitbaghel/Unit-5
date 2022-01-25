import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  AddTodoError,
  addTodoLoading,
  AddTodoSuccess,
  GetTodoError,
  GetTodoLoading,
  GetTodoSuccess
} from './Todo/action'



const Todo=() => {
    const [text, setText]=useState('')
    const {todo,loading,error}=useSelector((state) =>({todo:state.todo,loading:state.loading,error:state.error}))
      console.log(todo)
      
    
    const dispatch=useDispatch()
    const AddTodoFun=() => {
        dispatch(addTodoLoading())
        fetch('http://localhost:3005/Todo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({status:false,title:text})
        }).then(d => d.json()).then((data) => {
            dispatch(AddTodoSuccess(data));
            GetTodoFunc()
        }).catch((err) => {dispatch(AddTodoError(err));});

    }
    async function GetTodoFunc() {
        dispatch(GetTodoLoading())
        try {
            const res=await fetch('http://localhost:3005/Todo')
            const data=await res.json();
            dispatch(GetTodoSuccess(data));
        } catch (e) {
            dispatch(GetTodoError(e));
        }
    }
    useEffect(() => {
    GetTodoFunc()
    },[])
    return <div>
        <input type="text" placeholder="Enter your todo" value={text} onChange={(e) => setText(e.target.value)} />
        <button onClick={() => { 
            AddTodoFun()
        }}>Add</button>
        <div>
        <div>{todo.map(({title,status},i) => (
            <div key={i}>{title}-{status ? 'Done': 'Not Done'}</div>
        ))}</div>
        </div>
  </div>;
};

export default Todo;


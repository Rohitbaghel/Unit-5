import {createStore,combineReducers,applyMiddleware,compose} from "redux"
import { reducer as TodoReducer} from "../Features/Todos/reducer";
import { reducer as CounterReducer } from "../Features/Counter/reducer"
const rootReducer = combineReducers( {
    counterState: CounterReducer,
    TodoState: TodoReducer,
})
const loader1=(store) => (next) => (action) => {
    console.time('p1')
    next(action);
    console.timeEnd('p1')
    
}
const loader2=(store) => (next) => (action) => {
    console.time('p2')
    next(action);
    console.timeEnd('p2')
    
}
export const store=createStore(rootReducer,
    compose( window.__REDUX_DEVTOOLS_EXTENSION__(),  applyMiddleware(loader1, loader2)))
  
   
console.log(store.getState())
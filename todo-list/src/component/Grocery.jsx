import {GroceryInput} from './GroceryInput';
import {GroceryList} from './GroceryList';
import {useState} from 'react'
import { nanoid } from 'nanoid'
export  const Grocery = (item) => {
    const [value,setValue] = useState([])
    const GetItem = (item)=>{
console.log("item of grocery",item)
const groceryItems = {
    name:item,
    state:false,
    id:nanoid(7)

}
setValue([...value,groceryItems])
    }
    const DeleteItem = (id) =>{
        const UpdateItem = value.filter((item) => item.id !== id)
        setValue(UpdateItem)
    }
    return (
        <>
        <GroceryInput GetItem={GetItem} />
        {value.map((e)=> <GroceryList key={e.id} {...e} DeleteItem={DeleteItem} />)}
        </>
    )
}

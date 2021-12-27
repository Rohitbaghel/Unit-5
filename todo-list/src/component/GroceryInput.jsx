import {useState} from 'react'

export const GroceryInput = ({GetItem}) =>  {

    const [item,setItems] = useState("")
    const GroceryItem = (e) => {
        // console.log(e.target.value)
        setItems(e.target.value)
    }
    const GroceryList = () => {
    //   console.log(item)
    GetItem(item)
    }
    return (
       <>
       <input type="text"  placeholder="Enter Your Grocery here..." onChange={GroceryItem}/>
       <button onClick={GroceryList}>Add to the List</button>
       
       
       </>
    )
}



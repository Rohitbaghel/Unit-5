export const GroceryList = ({name,status,id,DeleteItem}) => {
    return (
        <div>
            Name: {name} - {status ? "Done" : "Not Done"}
             <button onClick={() =>DeleteItem(id)}>Delete</button>
        </div>
    )
}

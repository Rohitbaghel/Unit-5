import {useState} from 'react'
const tableData = {
    name: '',
    Age: '',
    Address:'',
    Department: '',
    Salary: '',
    maritalStatus: '',

}
export const TableComponet = () => {
    const [data,setData]=useState(tableData)
    const {name,Age,Address,Department,Salary,maritalStatus} = data
const GetData = (e) =>{
const {name,value} = e.target
setData({...data,[name]:value})
}
const dataSumbit= (e) =>{
    e.preventDefault()
    console.log(name.target.value)
}
    return (
       <form action="" onChange={dataSumbit} >
<input type="text" placeholder="Enter your Name" name="name" value={name}onChange={GetData}/><br />
<input type="number" placeholder="Enter your age" name="Age" value={Age}onChange={GetData}/>
<br />
<input type="text" placeholder="Enter your address" name="Address" value={Address}onChange={GetData}/>
<br />
<select name="department" id="">
    <option value="health">Health</option>
    <option value="Transport">Transport</option>
    <option value="Electric">Electricity</option>
</select>
<br />
<input type="number" placeholder="Enter your Salary" name="Salary" value={Salary}onChange={GetData}/>
<br />
<label >
maritalStatus
<input type="checkbox" name="maritalStatus" value={maritalStatus} />
</label><br />
<input type="submit" value="add" />
       </form>
    )
}

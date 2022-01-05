import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Products = () => {
  const [data, setData] = useState([]);
  async function ShowData() {
    const res = await fetch("http://localhost:3001/Cars ");
    // console.log(res.json())
    const dat = await res.json();
    // console.log(data)
    setData(dat);
  }
  useEffect(() => {
    ShowData();
  }, []);
  const image_url = 'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';
  return (
      <div style={{ backgroundImage : `url(${image_url})` }}>
          <h1>Car Collection</h1>
      {data.map(({id,CarName,Company,Year}) => (
        <>
          <div key={id} style={{ display: 'inline-block',border:'1px solid gray' , width: '150px',margin:'10px',borderRadius: '15px',backgroundColor:'red' }}>
            <div>
                      {" "}
                      <p>{CarName}</p>
                      <p>{Company}</p>
                      <p>{Year}</p>
                      <Link to={`/products/${id}`} style={{ color: 'White', textDecorationLine:'none'}}>Products {id}</Link>
                      
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// console.log(useParams.producsDetail)

export const ProductsDetails = () => {
  const { producsDetail } = useParams();
  //    console.log(producsDetail)
  const [product, setProduct] = useState([]);

  const GetSingleProd = async () => {
    const res = await fetch(`http://localhost:3001/Cars?id=${producsDetail} `);
    // console.log(res.json())
    const data = await res.json();
    // console.log(data)
    setProduct(data);
  };
  useEffect(() => {
    GetSingleProd();
  }, []);
  const image_url =
    "https://images.pexels.com/photos/1090932/pexels-photo-1090932.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
  return (
    <div style={{ backgroundImage: `url(${image_url})` }}>
      <h1>Car Detail</h1>
      {product.map((e) => (
        <>
          <div
            style={{
              border: "1px solid",
              borderRadius: "15px",
              width: "400px",
              margin: "auto",
            }}
          >
            <h1>CarName:{e.CarName}</h1>
            <h2>CompanyName :{e.Company}</h2>
            <h3>ManufacturerName :{e.Year}</h3>
          </div>
        </>
      ))}
    </div>
  );
};

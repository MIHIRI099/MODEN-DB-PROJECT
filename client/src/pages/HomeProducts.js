import React from "react";
import "../App"; 
import{useState} from 'react';
import axios from 'axios';
import { useEffect } from "react";

const HomeProducts = () => {

  const [productList,setProductList] =useState([]);
  const [NewPRICE_RUPEES,setNewPRICE_RUPEES] = useState([0])

    useEffect(() => {
    axios.get("http://localhost:3001/Showproducts", {
    }).then((response) => {
      setProductList(response.data);
  });
  },[]);

  const updatePrice = (PRODUCT_CODE) => {
    axios.put("http://localhost:3001/updatePrice", {PRICE_RUPEES : NewPRICE_RUPEES, PRODUCT_CODE:PRODUCT_CODE}).then
    ((response) => {
      setProductList(productList.map((val) => {
        return val.PRODUCT_CODE == PRODUCT_CODE ? {PRODUCT_NAME: val.PRODUCT_NAME,PRODUCT_CODE: val.PRODUCT_CODE, WEIGHT : val.WEIGHT,PRICE_RUPEES: NewPRICE_RUPEES,TIME_PERIOD_MONTHS:val.TIME_PERIOD_MONTHS}: val
      }))
    })
  }

  return (
  
      <div className="App">
        <div className="information">
        </div> 
        <div className='show'>
    
        {productList.map((val,key) => {
          return <div className='productshow'>
            <div>
            <h3>PRODUCT_NAME:  {val.PRODUCT_NAME}</h3>
            <h3>PRODUCT_CODE:  {val.PRODUCT_CODE}</h3>
            <h3>WEIGHT_KG:  {val.WEIGHT}</h3>
            <h3>PRICE_RUPEES:  {val.PRICE_RUPEES}</h3>
            <h3>TIME_PERIOD_MONTHS:  {val.TIME_PERIOD_MONTHS}</h3>
            </div>
          <div>
          <input type="text" placeholder="update_price" 
          onChange={(event)=>{
            setNewPRICE_RUPEES(event.target.value);
          }}
          />
           <button onClick={()=>{updatePrice(val.PRODUCT_CODE)}}>Update</button>
         </div>
         </div>
         
        })}
        </div>
      </div>
        
    );
  }
  


  
export default HomeProducts;
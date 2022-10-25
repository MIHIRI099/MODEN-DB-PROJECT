import React from "react";
import "../App"; 
import{useState} from 'react';
import axios from 'axios';
import { useEffect } from "react";


const Sales = () => {

  const [StockList,setStockList] =useState([]);
  const [OnSaleList,setOnSaleList] =useState([]);
 
  useEffect (() => {
    axios.get("http://localhost:3001/ShowStock", {
    }).then((response) => {
      setStockList(response.data);
  })
  },[]);
  useEffect (() => {
    axios.get("http://localhost:3001/ShowOnSale", {
    }).then((response) => {
      setOnSaleList(response.data);
  })
  },[]);

  const deleteBatch = (BATCH_NUMBER) => {
    axios.delete(`http://localhost:3001/delete/${BATCH_NUMBER}`).then((response) => {
      setStockList(StockList.filter((val) => {
        return val.BATCH_NUMBER != BATCH_NUMBER;
      }))
    })
  }
  

  return (
   
      <div className="App">
        <div className="information">
        </div> 
        <div className='show'>
        <h1>PRODUCTS_ON_STOCK</h1>
        {StockList.map((val,key) => {
          return <div className='ShowStock'>
            <div>
             
            <h3>BATCH_NUMBER:  {val.BATCH_NUMBER}</h3>
            <h3>QUANTITY_AT_STOCK:  {val.QUANTITY_AT_STOCK}</h3>
            </div>
          <div>
            <button onClick={()=>{deleteBatch(val.BATCH_NUMBER)}}>Delete</button>
         </div>
         </div>
         
        })}
        </div>
    
        </div>
        
    );
  }
  


  
export default Sales;
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
    axios.get("http://localhost:3001/ShowSALE", {
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
   
      <div className="AppContainer">
        <div className="information">
        </div> 
       
        <div className="new">
        
          <div className='show4'>
        <h1>PRODUCTS_ON_STOCK</h1>
        {StockList.map((val,key) => {
          return <div className='ShowStock'>
            <div>
             <h3>PRODUCT_NAME: {val.PRODUCT_NAME}<br></br>
           BATCH_NUMBER:  {val.BATCH_NUMBER}<br></br>
           QUANTITY_AT_STOCK:  {val.TOTAL_QUANTITY}<br></br></h3>
           <button onClick={()=>{deleteBatch(val.BATCH_NUMBER)}}>Delete</button>
          </div>
        
         </div>
         
        })}
        </div>
        <div className = 'show5'>
          <br></br>
        <h1>PRODUCTS_ON_STORES</h1>
        {OnSaleList.map((val,key) => {
          return <div className='ShowSALE'>
            <div>
             <h3>PRODUCT_NAME: {val.PRODUCT_NAME}<br></br>
           STORE_NAME:  {val.STORE_NAME}<br></br>
           QUANTITY_AT_STORE:  {val.QUANTITY_NO_OF_UNITS}<br></br></h3>
            
            </div>
         
         </div>
         
         
        })}
        </div>
        </div>
    

        </div>
        
    );
  }
  


  
export default Sales;
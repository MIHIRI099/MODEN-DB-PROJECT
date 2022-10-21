import React from "react";
import "../App"; 
import{useState} from 'react';
import axios from 'axios';


const Sales = () => {

  const [StockList,setStockList] =useState([]);
  const [OnSaleList,setOnSaleList] =useState([]);
 
  const showStock = () => {
    axios.get("http://localhost:3001/ShowStock", {
    }).then((response) => {
      setStockList(response.data);
  });
  };
  const showOnSale = () => {
    axios.get("http://localhost:3001/ShowOnSale", {
    }).then((response) => {
      setOnSaleList(response.data);
  });
  };

  const deleteBatch = (BATCH_NUMBER) => {
    axios.delete(`http://localhost:3001/delete/${BATCH_NUMBER}`).then((response) => {
      setStockList(StockList.filter((val) => {
        return val.BATCH_NUMBER != BATCH_NUMBER;
      }))
    })
  }

  return (
  
      <div className="App">
        <div className="information2">
        </div> 
        <div className='show2'>
        <button onClick={showStock}>Show stock Details</button>    
        {StockList.map((val,key) => {
          return <div className='showStock'>
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
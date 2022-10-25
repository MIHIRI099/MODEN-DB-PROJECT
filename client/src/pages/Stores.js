import React from "react";
import "../App"; 
import{useState} from 'react';
import axios from 'axios';
import{useEffect} from 'react';

const Stores = () => {

  const [ShopList,setShopList] =useState([]);
  const [NewBalance,setNewBalance] =useState("");

  useEffect (() => {
    axios.get("http://localhost:3001/ShowShops", {
    }).then((response) => {
      setShopList(response.data);
  })
  },[]);

  const updateBalance = (STORE_NAME) => {
    axios.put("http://localhost:3001/updateBalance", {BALANCE : NewBalance, STORE_NAME:STORE_NAME}).then
    ((response) => {
      setShopList(ShopList.map((val) => {
        return val.STORE_NAME == STORE_NAME ? {STORE_NAME: val.STORE_NAME,STORE_LOCATION: val.STORE_LOCATION,BALANCE: NewBalance}: val
      }))
    })
  }

  return (
  
      <div className="App">
        <div className="information">
        </div> 
        <div className='show2'>
          
        {ShopList.map((val,key) => {
          return <div className='shopshow'>
            <div>
            <h3>STORE_NAME:  {val.STORE_NAME}</h3>
            <h3>STORE_LOCATION:  {val.STORE_LOCATION}</h3>
            <h3>BALANCE:  {val.BALANCE}</h3>
            </div>
          <div>
          <input type="text" placeholder="update_BALANCE" 
          onChange={(event)=>{
            setNewBalance(event.target.value);
          }}
          />
           <button onClick={()=>{updateBalance(val.STORE_NAME)}}>Update_balance</button>
         </div>
         </div>
         
        })}
        </div>
      </div>
        
    );
  }
  


  
export default Stores;
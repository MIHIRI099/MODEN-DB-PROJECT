import React from 'react';
import{useState} from 'react';
import axios from 'axios';
import "../App"; 

import { useEffect } from "react";
const BatchQuantity = () => {

 
  const [PRODUCT_CODE, setPRODUCT_CODE] = useState("");
  const [BATCH_NUMBER, setBATCH_NUMBER] = useState("");
  const [MANUFACTURING_DATE, setMANUFACTURING_DATE] = useState("");
  const [EXPIRE_DATE, setEXPIRE_DATE] = useState("");
  const [TOTAL_QUANTITY, setTOTAL_QUANTITY] = useState("");

  const [BatchList,setBatchList] =useState([]);
  

  /*  useEffect(() => {
    axios.get("http://localhost:3001/ShowBatches", {
    }).then((response) => {
      setBatchList(response.data);
  });
  },[]);
*/
  const addNewBatch = () => {
    axios.post("http://localhost:3001/createNewBatch", {
      
      PRODUCT_CODE: PRODUCT_CODE,
      BATCH_NUMBER: BATCH_NUMBER,
      MANUFACTURING_DATE: MANUFACTURING_DATE,
      EXPIRE_DATE: EXPIRE_DATE,
      TOTAL_QUANTITY: TOTAL_QUANTITY,
  
    }).then(() => {console.log("success");
  });
};

const ShowBatches = () => {
  axios.get("http://localhost:3001/ShowBatches", {
    }).then((response) => {
      setBatchList(response.data);
  });
};


  
  return (
    <div className='App'>
      <div className="information">
      <label>PRODUCT_CODE</label>
      <input type="text" onChange={(event) => {setPRODUCT_CODE(event.target.value)}}/>
      <label>BATCH_NUMBER</label>
      <input type="text" onChange={(event) => {setBATCH_NUMBER(event.target.value)}}/>
      <label>MANUFACTURING_DATE</label>
      <input type="text" onChange={(event) => {setMANUFACTURING_DATE(event.target.value)}}/>
      <label>EXPIRE_DATE</label>
      <input type="text" onChange={(event) => {setEXPIRE_DATE(event.target.value)}}/>
      <label>TOTAL_QUANTITY</label>
      <input type="text" onChange={(event) => {setTOTAL_QUANTITY(event.target.value)}}/>
      <button onClick={addNewBatch}>Add Batch</button>
      </div>
      <div className='show2'>
          <button onClick={ShowBatches}>Show All Batch Details</button>
          {BatchList.map((val,key) => {
          return <div className='Batchshow'>
            <div>
            <br></br>
            <h3>PRODUCT_CODE:  {val.PRODUCT_CODE} /
            BATCH_NUMBER: {val.BATCH_NUMBER} /
            MANUFACTURING_DATE: {val.MANUFACTURING_DATE} /
            EXPIRE_DATE :{val.EXPIRE_DATE} /
            TOTAL_QUANTITY :{val.TOTAL_QUANTITY}</h3>        
            <br></br>
            </div>
          <div>
         </div>
         </div>
          })}
      </div>
    </div>
  
  
  
  );
};
  
export default BatchQuantity;
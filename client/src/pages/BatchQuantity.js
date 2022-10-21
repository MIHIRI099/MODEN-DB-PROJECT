import React from 'react';
import{useState} from 'react';
import axios from 'axios';
  
const BatchQuantity = () => {

 
  const [PRODUCT_CODE, setPRODUCT_CODE] = useState("");
  const [BATCH_NUMBER, setBATCH_NUMBER] = useState("");
  const [MANUFACTURING_DATE, setMANUFACTURING_DATE] = useState("");
  const [EXPIRE_DATE, setEXPIRE_DATE] = useState("");
  const [TOTAL_QUANTITY, setTOTAL_QUANTITY] = useState("");


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
    </div>
  );
};
  
export default BatchQuantity;
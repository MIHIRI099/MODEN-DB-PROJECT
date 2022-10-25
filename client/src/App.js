import './App.css';
import{useState} from 'react';
import axios from 'axios';
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages/Home';
import HomeProducts from './pages/HomeProducts';
import BatchQuantity from './pages/BatchQuantity';
import Sales from './pages/Sales';
import Stores from './pages/Stores';
import Login  from './pages/login';
  

function App() {
  const [PRODUCT_NAME, setPRODUCT_NAME] = useState("");
  const [PRODUCT_CODE, setPRODUCT_CODE] = useState("");
  const [WEIGHT, setWEIGHT] = useState(0);
  const [PRICE_RUPEES, setPRICE_RUPEES] = useState(0);
  const [TIME_PERIOD_MONTHS, setTIME_PERIOD_MONTHS] = useState(0);
  
  
  const displayInfo = () => { 
    console.log(PRODUCT_NAME + PRODUCT_CODE +WEIGHT + PRICE_RUPEES+TIME_PERIOD_MONTHS); 
  };

  const [productList,setProductList] =useState([]);
  const [NewPRICE_RUPEES,setNewPRICE_RUPEES] = useState([0])

  const addNew = () => {
    axios.post("http://localhost:3001/create", {
      PRODUCT_NAME: PRODUCT_NAME,
      PRODUCT_CODE: PRODUCT_CODE,
      WEIGHT: WEIGHT,
      PRICE_RUPEES: PRICE_RUPEES,
      TIME_PERIOD_MONTHS: TIME_PERIOD_MONTHS,
    }).then(() => {console.log("success");
  });

  };
  const showProducts = () => {
    axios.get("http://localhost:3001/products", {
    }).then((response) => {
      setProductList(response.data);
  });
  };

  const updatePrice = (PRODUCT_CODE) => {
    axios.put("http://localhost:3001/update", {PRICE_RUPEES : NewPRICE_RUPEES, PRODUCT_CODE:PRODUCT_CODE}).then
    ((response) => {
      setProductList(productList.map((val) => {
        return val.PRODUCT_CODE == PRODUCT_CODE ? {PRODUCT_NAME: val.PRODUCT_NAME,PRODUCT_CODE: val.PRODUCT_CODE, WEIGHT : val.WEIGHT,PRICE_RUPEES: NewPRICE_RUPEES,TIME_PERIOD_MONTHS:val.TIME_PERIOD_MONTHS}: val
      }))
    })
  }

  const deleteBatch = (BATCH_NUMBER) => {
    axios.delete(`http://localhost:3001/delete/${BATCH_NUMBER}`).then((response) => {
      setProductList(productList.filter((val) => {
        return val.BATCH_NUMBER != BATCH_NUMBER;
      }))
    })
  }

/*
  return (
    
    <div className="App">
      <div className="information">
      <label>PRODUCT_NAME</label>
      <input type="text"  onChange={(event) => {setPRODUCT_NAME(event.target.value)}}/>
      <label>PRODUCT_CODE</label>
      <input type="text" onChange={(event) => {setPRODUCT_CODE(event.target.value)}}/>
      <label>WEIGHT</label>
      <input type="number" onChange={(event) => {setWEIGHT(event.target.value)}}/>
      <label>PRICE_RUPEES</label>
      <input type="number" onChange={(event) => {setPRICE_RUPEES(event.target.value)}}/>
      <label>TIME_PERIOD_MONTHS</label>
      <input type="number" onChange={(event) => {setTIME_PERIOD_MONTHS(event.target.value)}}/>
      <button onClick={addNew}>Add Product</button>
      </div>
      <div className='show'>
      <button onClick={showProducts}>Show Product</button>    
      {productList.map((val,key) => {
        return <div className='productshow'>
          <div>
          <h3>{val.PRODUCT_NAME}</h3>
          <h3>{val.PRODUCT_CODE}</h3>
          <h3>{val.WEIGHT}</h3>
          <h3>{val.PRICE_RUPEES}</h3>
          <h3>{val.TIME_PERIOD_MONTHS}</h3>
          <h3>{val.BATCH_NUMBER}</h3>
          </div>
        <div>
        <input type="text" placeholder="update_price" 
        onChange={(event)=>{
          setNewPRICE_RUPEES(event.target.value);
        }}
        />
        <button onClick={()=>{updatePrice(val.PRODUCT_CODE)}}>Update</button>
        <button onClick={()=> {deleteBatch(val.BATCH_NUMBER)}}>Delete</button>
       </div>
       </div>
      })}
      </div>
    </div>
      
  );
}


export default App;*/
if (!localStorage.getItem('email'))  return <Login />; 

return (
    <Router>
    <Navbar />
    <Routes>
        <Route path="/Home" element={<Home />} />
        <Route  path='/HomeProducts'  element={<HomeProducts />} />
        <Route path='/BatchQuantity' element={<BatchQuantity/>} />
        <Route path='/Sales' element={<Sales/>} />
        <Route path='/Stores' element={<Stores/>} />
       
    </Routes>
    </Router>
);
}
 
export default App;
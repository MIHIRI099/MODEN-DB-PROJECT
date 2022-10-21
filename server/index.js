const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');


app.use(cors());
app.use(express.json());

const db = mysql.createPool({
    user: "root",
    host: 'localhost',
    password: 'root',
    database: 'moden',
});

app.post("/createNewBatch", (req, res)  => {
   
    const PRODUCT_CODE = req.body.PRODUCT_CODE;
    const BATCH_NUMBER = req.body.BATCH_NUMBER;
    const MANUFACTURING_DATE = req.body.MANUFACTURING_DATE;
    const EXPIRE_DATE = req.body.EXPIRE_DATE;
    const TOTAL_QUANTITY = req.body.TOTAL_QUANTITY;

  
      db.query("INSERT INTO product_quantity(PRODUCT_CODE,BATCH_NUMBER,MANUFACTURING_DATE,EXPIRE_DATE,TOTAL_QUANTITY) VALUES (?,?,?,?,?)", 
      [PRODUCT_CODE,BATCH_NUMBER,MANUFACTURING_DATE,EXPIRE_DATE,TOTAL_QUANTITY], 
      (err, result) => {
          if (err) {
              console.log(err)
          } else {
              res.send('Values inserted')
          }
      });
  });


  app.get("/Showproducts",  (req,res)=>{
    db.query("SELECT * FROM product ", (err,result) => {
 if(err){
     res.send(err);
     console.log(err);  
 }else{
     res.send(result);              
 }
 });   
 
});


app.get("/showShops",  (req,res)=>{
    db.query("SELECT * FROM store ", (err,result) => {
 if(err){
     res.send(err);
     console.log(err);  
 }else{
     res.send(result);              
 }
 });   
 
});

 app.put('/updatePrice', (req, res) => {
    const STORE_NAME = req.body.STORE_NAME;
    const BALANCE = req.body.BALANCE;

    db.query("UPDATE store SET BALANCE = ? WHERE PRODUCT_CODE = ?", [BALANCE, STORE_NAME], (err, result) => {
        if(err){
            res.send(err);
            console.log(err);  
        }else{
            res.send(result);              
        }
        });   
        
    }); 

    app.put('/updateBalance', (req, res) => {
        const PRODUCT_CODE = req.body.PRODUCT_CODE;
        const PRICE_RUPEES = req.body.PRICE_RUPEES;
    
        db.query("UPDATE product SET PRICE_RUPEES = ? WHERE PRODUCT_CODE = ?", [PRICE_RUPEES, PRODUCT_CODE], (err, result) => {
            if(err){
                res.send(err);
                console.log(err);  
            }else{
                res.send(result);              
            }
            });   
            
        }); 
    

    app.delete('/delete/:BATCH_NUMBER', (req, res) => {
        const BATCH_NUMBER = req.params.BATCH_NUMBER;
        db.query("DELETE FROM product_quantity WHERE BATCH_NUMBER = ?", BATCH_NUMBER, (err, result) => {
            if(err){
                res.send(err);
                console.log(err);
            }else{
                res.send(result);
            }
        });
    });
    app.post("/login",(req,res)=>{
        const email = req.body.email;        
        const password = req.body.password; 
        db.query("SELECT email, password FROM user WHERE email = ? AND password = ?",[email,password],(err,result)=>{
            if(err){
                res.send({err:err});
            }
            if(result.length>0){
                console.log(result);
                res.send(result);
            }
            else{
                console.log("Wrong username/password combination");
                res.send({message:"Wrong username/password combination!"});
            }            
        });
    });


app.listen(3001, () => {
    console.log('Server is running on port 3001');
});
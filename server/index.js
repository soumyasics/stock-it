const express=require('express')
const bodyParser=require('body-parser')
const db=require('./db/dbConnection')
const app=express()
const cors=require('cors')
const PORT = 4034;

app.use(cors())
const path=require('path')
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(express.static( `${__dirname}/upload`));

const route=require('./routes')
app.use('/stock_it_api',route)

app.listen(PORT,()=>{
    console.log(`Server created successfully at http://localhost:${PORT}/stock_it_api`);
})
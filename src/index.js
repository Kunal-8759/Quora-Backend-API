const express=require('express');
const bodyParser=require('body-parser');

const {testingRouter}=require('./routes/index')

const {PORT}=require('./config/server.config');

const app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

app.use('/api',testingRouter);

app.listen(PORT,async()=>{
    console.log(`server started at port : ${PORT}`);
})

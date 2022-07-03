const express = require('express');
const cors = require('cors');
const logger = require('morgan');

const app = express();
app.use(cors({
    allowedHeaders:['Content-Type'],
    allowMethods:['GET','POST','PUT','DELETE','OPTIONS']
}));

app.use(logger('dev'));

const users = new Array(10).fill(true).map((item,index) => {
    return {id:String(index + 1),name:`name${index + 1}`}
});

app.get('/users',(req,res) => {
    res.json(users);
    
})

app.listen(8082,() => {
    console.log('run app 8082');
})
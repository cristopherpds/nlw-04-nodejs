import 'reflect-metadata';
import express from 'express';
import "./database";

const app = express();



app.get('/', (req, res) => {
    return res.json({message:'hello word'})
})


app.post('/', (req, res) => {
    return res.json({message:'dados salvos com sucesso!'})
})

app.listen(3333, ()=> console.log('server run'));

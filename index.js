const express = require('express')
const app=express()

app.get('/',(req,res)=>{
    res.send('Tis home page')
}
)
app.get('/about',(req,res)=>{
    res.send('About####')
}
)

const PORT = 3000
const HOST = 'localhost'

app.listen(
    PORT, HOST, () => {
console.log(`Сервер запущен: http://${HOST}:${PORT}`)
}
)

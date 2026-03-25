const express = require('express')
const app=express()

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/templates/index.html')
}
)


const PORT = 3000
const HOST = 'localhost'

app.listen(
    PORT, HOST, () => {
console.log(`Сервер запущен: http://${HOST}:${PORT}`)
}
)
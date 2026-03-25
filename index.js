const http = require('http')
const fs=require('fs')

let server=http.createServer((req,res)=>{
 res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8'})
// res.end( 'Hello Node JS')

if(req.url=='/'){
   fs.createReadStream('./templates/index.html').pipe(res) 
}
else if (req.url=='/about'){
    fs.createReadStream('./templates/about.html').pipe(res) 
}
})

//const stream = fs.createReadStream('./templates/index.html').pipe(res)
//stream.pipe(res)

const PORT = 3000
const HOST = 'localhost'

server. listen(
    PORT, HOST, () => {
console. log(`Сервер запущен: http://${HOST}:${PORT}`)
}
)

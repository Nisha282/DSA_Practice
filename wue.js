

const http = require("http")

const server = http.createServer((req,res)=>{
    res.write("server is connected")
    res.end()
})

server.listen(3000 , ()=>{
    console.log("connecting...")
})




const http = require('http');
const bodyParser = require('body-parser');
const { Server } = require('socket.io');
const jsonParser = bodyParser.json();

const app = http.createServer(async(req,res)=>{
    res.setHeader('Content-Type', 'application/json');
    if(req.method==="POST" && req.url === "/api"){
        jsonParser(req,res,async()=>{
            console.log(req.body); 
        })
        res.statusCode=201;
    }
    res.end('Hello world in Node.js Server!');
});


app.listen(4000, '127.0.0.1', ()=>{
    console.log("Server listening on port 4000");
})

const http=require("http");
const port=8081;
http.createServer((req,res)=>{
res.writeHead(200, {"Content-Type":"text/html" });
res.write("<h2>server started:-12345 </h2>");
res.end();
})
.listen(port,()=>{
    console.log(`Node js server started running on port ${port}`);
})
// http://localhost:8081
// npm init
// code run cmd:npm server.js
// server status code: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
// 
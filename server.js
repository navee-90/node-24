
const http=require("http");

const port=8081; //local port num
// http methods
/*
GET:In order to get data from server
POST:sending data to server
DELETE:Deleting data from database
PATCH:Updating certain fields
PUT:Full Update
*/
const toDoList = ["learn","apply things","succed"];
http.createServer((req,res)=>{
    const {method,url}=res;
    // console.log(method,url);
    if(url==="/todos"){
       if(method==="GET"){
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write(toDoList.toString());
       }else{
        res.writeHead(501);
       }
    }else{
        res.writeHead(404);
    }
    res.end();
// res.writeHead(200, {"Content-Type":"text/html" });
// res.write("<h2>server started:-12345 </h2>");
// res.end();
})
.listen(port,()=>{
    console.log(`Node js server started running on port ${port}`);
})
// http://localhost:8081
// npm init
// code run cmd:npm server.js
// server status code: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
// http:localhost:8081/signin
// http:localhost:8081/signup
// http:localhost:8081/contactus
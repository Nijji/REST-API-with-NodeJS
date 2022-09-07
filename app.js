const http = require("http");
//server
const server = http
  .createServer((req, res) => {
    res.end("welcome to my page");
  })
  .listen(3000);
//get
http.get("https://www.github.com/users", (res) => {
  res.on(end, () => {
    let responseText = JSON.parse(data);

  });
});
//post
const axios=require('axios')
const data = JSON.stringify({ name: "jhon", id: 4566, title: "manager" });

axios.post('www.github.com/users',data)
.then(()=>{
      console.log(`body:${JSON.stringify(res.data)}`);
})
//files
const fs=require('fs')
//fs.writeFile,fs.unlink
fs.readFile('test.txt',(err,data)=>{
 err ? err :console.log(data)
})

//routing
const routes={
      '/':()=>{res.end('this is my homepage')},
      '/about':()=>{res.end('welcome to about page')}
}
http.createServer((req,res)=>{
if(req.url in routes){
    return routes[req.url](req,res)
}
}).listen(3000)

//path
const path=require('path')
file=path.resolve()

//events
const eve=require('events');
const { format } = require("path");
const { doesNotThrow } = require("assert");

let ev=new Event
ev.on('my_event',(data)=>{
console.log(data);
})

ev.emit('my_event','call event method')

//streams
const stream=fs.createReadStream('txt.json').pipe(res)

//buffer
const buf=Buffer.from ('hey there come here')
console.log(buff[4]);

//exception handling
myError()
.then(()=>{
      return myError().catch(err=>{
            throw err
      })
})
try {
     console.log('this cricket');
     lslsl 
     console.log('this new house');
} catch (error) {
      console.log(`error: ${error}`);
}


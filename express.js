//express
const express = require("express");
const app = express();
const path = require("path");
const PORT = 3000;

app
  .get("/", (req, res) => {
    res.send("this is my home page");
  })
  .listen(PORT);

//middleware
const myLogger = (req, res, next) => {
  res.send("this is the log page");
  next();
};
const reqTime = (req, res, next1) => {
  req.reqTime = Date.now();
  next1();
};

app.use(myLogger);
app.use(reqTime);

app
  .get("/login", (req, res) => {
    res.send(`last login time: ${req.reqTime}`);
  })
  .listen(PORT);

//static files
app.use("/public", express.static("images"));

app
  .get("/images", (req, res) => {
    res.send("images");
  })
  .listen(PORT);

//routing

const data = { name: "jhon", id: 4566, title: "manager" };
app.get("/", () => {
  res.send("my homepage");
});
app.get("/about", () => {
  res.json(data);
});
app.get("/weather", () => {
  res.send("my weather page");
});
app.listen(PORT);

//views
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app
  .get("/", (req, res) => {
    res.render("index", { title: "Form Handling" });
  })
  .listen(PORT);

app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  res.end(`your email is ${email} and your password is ${password}`);
});

//session
const session = require("express-session");
app.use(
  session({ secret: "your key", resave: "true", saveUninitialised: "true" })
);
app.get('/',(req,res)=>{
req.session.name='nijji'
res.send('session set')
})
app.get('/session',(req,res)=>{
  var name=req.session.name
  return res.send(name)
  })
  app.get('/destroy',(req,res)=>{
    req.session.destroy(()=>{
      console.log('session ended');
    })
    
    })

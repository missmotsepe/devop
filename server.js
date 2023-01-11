const express = require('express')
const app = express();
bodyParser = require("body-parser")
port = 3080;
const users =[];
app.use(bodyParser.json());
app.use(express.static(process.cwd()+"/my-app/dist/nmy-app/"));
app.get('/api/users', (req,res)=>{
res.json(users)
});
app.post('/api/user/', (req,res)=>{
const user = req.body.user;
users.push(user);
res.json('user added succesfully');
});
app.get('/', (req,res)=>{
// res.json("Server Online")
res.sendFile(process.cwd()+"/my-app/dist/my-app/index.html")
})
app.listen(port, ()=>{
console.log(`Server listening on port::${port}`)

});
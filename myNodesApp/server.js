const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true}))

app.use(bodyParser.json())

app.get('/', (req, res) => {
let message = "welcome to easyNode appliction, "+
"take notes quickly.organize and keep track of all you"
res.json({"message":message});
});

app.listen(3000, () =>{
console.log("Server is listening on port 3000");
});
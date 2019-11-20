const express = require('express');
const path = require('path');
const port = process.env.PORT || 3000;
const app = express();
const destinationDir = path.join(__dirname,'../dist');

//Hosting from dist folder
app.use(express.static(destinationDir));
console.log(`Hosting Server in the path ${destinationDir}`);

//Serving index.html
app.get('*',(req,res) =>{
    res.sendFile(path.join(destinationDir,'index.html'))
});
console.log('Serving index.html');

//Listening to the port
app.listen(port,() => console.log(`Server listening to the post: ${port}`));

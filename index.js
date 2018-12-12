const express = require('express');
const app = express();
const port = 3000;
var course = "undefined";
app.use(express.static('public'));
app.use(express.json());

app.post('/received',(req,res) => {
    var bd = req.body.courses;
    res.send(body.val());
    console.log(`Accessed: ${req.body.courses}`);
    console.log(`From IP: ${req.ip}`);
})
app.listen(port, () => {
    console.log(`Listening on port ${port}!`);
})
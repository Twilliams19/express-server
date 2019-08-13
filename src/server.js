const path = require('path')
const express = require("express");
// const db = require("./db.js");


const app = express();
const publicDirectory = path.join(__dirname, '../public')


app.use(express.static(publicDirectory))


app.get('/add', (req, res) => {
	console.log(req.query);
	var emailMe =  req.query.email;
    var event = req.query.event;
    console.log(emailMe);
    // db.insertCaughtData(emailMe);
    res.redirect();
})



app.listen(8080, () => {
	console.log("Listening On Port 8080")
}) 
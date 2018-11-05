var express = require('express')
var app = express()
var path = require('path')
const port = 3000



/*var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
  if (err) return console.log("Error");
  console.log("Database created!");
  db.close();
});*/


app.get('/', (req, res) => res.send('Hello World!'))

app.use(express.static(path.join(__dirname,'/public')));



//new code

app.get('/js/', function(req, res) { 
    res.render('index.html'); 
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`))


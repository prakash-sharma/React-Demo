const express = require('express');
const bodyParser = require('body-parser');

const MongoClient = require('mongodb').MongoClient;
var db;
const app = express();

 app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });



 app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const uri = "mongodb://abhishek:9045323996abhishek@ds147390.mlab.com:47390/shopperuncle";
MongoClient.connect(uri,function(err,database){
    if(err) return console.log(err);
    db = database;
    app.listen(3010,function(){
        console.log('connection established');
    });
});


// replace the uri string with your connection string.


app.get('/',function(req,res){
    res.sendFile(__dirname+ '/public/index.html');
});

app.post('/user',function(req,res){
    var new_email =req.body.email,
        username = req.body.userName;
        var dbconnection = db.collection('user').find({email: new_email , userName : username});
    dbconnection.each(function(err, doc) {
        if(doc){
            console.log('user exists'+ doc);
            results='hello everybody !'
  res.send(JSON.stringify(results));
            return false; 
        }
        else{
            db.collection('user').insert(req.body,function(err,result){
                if(err) return console.log(err);
                console.log('saved our todo');
                res.redirect('/');
            })  
        }
    });
})




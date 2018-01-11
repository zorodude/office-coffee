const mongodb = require('mongodb');
const express = require('express');
const body_parser = require('body-parser');
const db_point = require('./db');

const app = express();
const port = 3333;
const coffee_collection = 'coffee';

app.use(body_parser.json());

require('./routes')(app,{});

// create var outside of database callback to reuse connection pool
var db_pool;

mongodb.MongoClient.connect(db_point.url, function(err, database){

  if(err){
    console.log(err);
    process.exit(1);
  }

  // save database object from callback for reuse
  // mongo 3 requires .db('dbname') syntax
  db_pool = database.db(db_point.db);
  console.log('database connection ready');

  // initialize server
  app.listen(port, function(){
    console.log('listening on ' +port);
  });

});

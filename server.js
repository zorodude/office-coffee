const mongodb = require('mongodb');
const express = require('express');
const path = require('path');
const body_parser = require('body-parser');
const db_point = require('./db');
const routes = require('./routes');

const app = express();
const port = 3333;
const coffee_collection = 'coffee';

app.use(body_parser.json());

// point to app directory
let app_dir = __dirname + '/dist/';
app.use(express.static(app_dir));

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

	// handle api routes
  routes(app,db_pool);

	// point all other routes to index.html
	app.get('*', function(request, response){
	  response.sendFile(path.join( app_dir + '/index.html'));
	});


  console.log('database connection ready');

  // initialize server
  app.listen(port, function(){
    console.log('listening on port ' +port);
  });

});

module.exports = function(app,db){

  // setup new collection based on time
  var utc = new Date();
  var dd = utc.getDate().toLocaleString(undefined, {minimumIntegerDigits: 2});
  var mm = (utc.getMonth()+1).toLocaleString(undefined, {minimumIntegerDigits: 2});
  var yyyy = utc.getFullYear();
  var today = 'orders_' +yyyy +'_' +mm +'_' +dd;

  let collection = db.collection(today);

  app.post('/new', function(req,res){
    console.log('routes > insert: ');
    console.log(req.body);
    collection.insertOne(req.body,function(err,doc){
      if(err){
        var stat = 500;
        var reply = { 'status': 'fail', 'message': 'Failed to add new order' }
        console.log('failed to add new order');
      }else{
        var stat = 200;
        var reply = { 'status': 'success', 'id': doc.ops[0]._id }
        console.log('added new order ' +doc.ops[0]._id);
      }
      res.status(stat).json(reply);
    })
  });

  app.get('/orders', function(req,res){
    console.log('routes > get');
    collection.find({}).toArray(function(err,docs){
      if(err){
        var stat = 500;
        var reply = { 'status': 'fail', 'message': 'Failed to retrieve orders'}
        console.log('failed to get today\'s list');
      }else{
        var stat = 200;
        var reply = { 'status': 'success', 'orders': docs }
      }
      res.status(stat).json(reply);
    })
  })

};

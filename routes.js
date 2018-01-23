module.exports = function(app,db){

  let collection = db.collection('orders');

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

};

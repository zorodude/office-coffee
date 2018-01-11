module.exports = function(app,db){

  let collection = db.collection('orders');

  app.get('/nothing', function(req,res){
    console.log('nothing');
  });

  app.post('/new', function(req,res){
    var order = { 'type': 'regular', 'size': 'small' };

    collection.insertOne(order,function(err,doc){
      if(err){
        res.send('Failed to add new order');
      }else{
        res.status(200).json(doc.ops[0]);
      }
    })
  });

};

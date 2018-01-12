module.exports = function(app,db){

  let collection = db.collection('orders');

  app.post('/new', function(req,res){
    console.log('routes > insert: ');
    console.log(req.body);
    collection.insertOne(req.body,function(err,doc){
      if(err){
        res.send('Failed to add new order');
        console.log('failed to add new order');
      }else{
        res.status(200).json(doc.ops[0]);
        console.log('added new order ' +doc.ops[0]._id);
      }
    })
  });

};

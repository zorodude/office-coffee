module.exports = function(app,db){

  app.get('/nothing', function(req,res){
    console.log('nothing');
  });

  app.post('/poop', function(req,res){
    console.log(req.body);
    res.send('poop');
  });

};

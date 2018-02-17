exports.get_all = function(req,res){
	console.log('routes > get_all');
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
}

var MongoClient = require('mongodb').MongoClient
var url = "mongodb://csc309f:csc309fall@ds117316.mlab.com:17316/csc309db"
var posts = [ {user: "one", text: "I like Javascript"}, {user: "two", text: "I love python"}, {user: "three", text: "I like Ruby"}, {user: "four", text: "I like Java"}, {user: "five", text: "I love C."}]


    MongoClient.connect(url, function(err,res){
				if(err) console.log(err)
				console.log("Database created");
				db = res
				
				// Add functions here
	var data = {user: "John", text: "I can't decide man!"}
	/*db.collection("TeamUndefinedSol").insertOne(data, function(err, res){
	//continue
		if (err) {
			console.log(err);
		} else { 
			console.log(res);
		}
	});
	db.collection("TeamUndefinedSol").insertMany(posts, function(err, res){
	//continue
		if (err) {
			console.log(err);
		} else { 
			console.log(res);
		}
	});*/
	//Mongo assigns a field _id such taht every entry has a primary key
	/*db.collection("TeamUndefinedSol").find({user:"five"}).project({ _id: 0}).toArray(function (err, res) {
		if (err) { 
		 console.log(err);
		 } else {
		 	console.log("Find:");
		 	console.log(res);
		 }
	});*/ //Project is all fields except field 0!
	/*db.collection("TeamUndefinedSol").find({text:/like/}).toArray(function (err, res) { //Searches for the appearance of "like" in an entry
		if (err) { 
		 console.log(err);
		 } else {
		 	console.log("Find:");
		 	console.log(res);
		 }
	});*/
	//In projection, don't mix user: true and text: false
	//Use only one! It will display everything else
	db.collection("TeamUndefinedSol").find({}, {_id: false, user: false}).toArray(function (err, res) { //Searches for the appearance of "like" in an entry
		if (err) { 
		 console.log(err);
		 } else {
		 	console.log("Find:");
		 	console.log(res);
		 }
	});;
	/*db.collection("TeamUndefinedSol").update({user:"four"}, {$set: {text: "I like Javascript too!"}});*/
	/*db.collection("TeamUndefinedSol").deleteOne({text:"I love C"}, function(err, res) {
		if (err) { 
		 console.log(err);
		 } else {
		 	console.log("Delete:");
		 	console.log(res);
		 }
	});*/
	
	/*db.collection("TeamUndefinedSol").deleteMany({text:"I love C"}, function(err, res) {
		if (err) { 
		 console.log(err);
		 } else {
		 	console.log("Drop:");
		 	console.log(res);
		 }
	});*/
	//Delete colelction
	/*db.collection("TeamUndefinedSol").drop(function(err, res) {
		if (err) { 
		 console.log(err);
		 } else {
		 	console.log("Drop:");
		 	console.log(res);
		 }
	});*/
	db.close();
    });
    


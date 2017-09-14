const MongoClient = require('mongodb').MongoClient;

// Connection url

const url = 'mongodb://localhost:27017/mongomania';

MongoClient.connect(url, function(err, db){
  if(err) {
    return console.dir(err);
  }
  console.log('Connected to mongodb');
  /*
  insertDocument(db, function(){
    db.close();
  });
  insertMultiDocs(db, function(){
    db.close();
  });
  findDocuments(db, function(){
    db.close();
  });
  queryDocuments(db, function() {
    db.close();
  });
  updateDocuments(db, function() {
    db.close();
  });
  removeDocuments(db, function() {
    db.close();
  });
  */
});
// insert Single Doc
const insertDocument = function(db, callback) {
  // get Collection
  const collection = db.collection('users');
  // insert Docs
  collection.insert({
    name: 'Vicente Santana',
    email: 'no email'
  }, function(err, result) {
    if(err) {
      return console.dir(err);
    }
    console.log('inserted Document');
    console.log(result);
    callback(result);
  });
}
// insert Multiple Documents
const insertMultiDocs = function(db, callback) {
  const collection = db.collection('users');
  collection.insertMany([
    {
      name: 'Wil Santana',
      email: 'santana.wil@gmail.com'
    },
    {
      name: 'Lucas Allison-Santana',
      email: 'dog@chihuahua.com'
    },
    {
      name: 'Fiona Edwards',
      email: 'crazybetch@dominica.com'
    }
  ],
  function(err, result){
    if(err) {
      return console.dir(err);
    }
    console.log('inserted ' + result.ops.length + ' documents');
    callback(result);
  });
}
// find documents
const findDocuments = function(db, callback) {
  const collection = db.collection('users');
  collection.find({}).toArray(function (err, docs){
    if(err) {
      return console.dir(err);
    }
    console.log('Found the following records ');
    console.log(docs);
    callback(docs);
  });
}
// query documents
const queryDocuments = function(db, callback) {
    //Get Collection
  const collection = db.collection('users');
  collection.find({'name': 'Lucas Allison-Santana'}).toArray(function (err, docs){
    if(err) {
      return console.dir(err);
    }
    console.log('Found the following records ');
    console.log(docs);
    callback(docs);
  });
}
// update documents
const updateDocuments = function(db, callback) {
  //Get Collection
  const collection = db.collection('users');
  collection.updateOne({name: 'Lucas Allison-Santana'},
    {$set: {email: 'chihuahua@dog.com'}},
    /* $set operator used to update one portion of the database
       if not used then it will replace the other databases */
    function(err, result){
      if(err) {
        return console.dir(err);
      }
    console.log('updated Document');
    callback(result);
  });
}
// removes documents
const removeDocuments = function(db, callback){
	// Get Collection
	const collection = db.collection('users');
  collection.deleteOne({name:'Vicente Santana'}, function(err, result){
		if(err){
			return console.dir(err);
		}
		console.log('Removed Document');
		//console.log(result);
		callback(result);
	});
}

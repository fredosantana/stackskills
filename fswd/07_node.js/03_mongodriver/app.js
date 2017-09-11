const MongoClient = require('mongodb').MongoClient;

// Connection url

const url = 'mongodb://localhost:27017/mongomania';

MongoClient.connect(url, function(err, db){
  if(err) {
    return console.dir(err);
  }
  console.log('Connected to mongodb');

  InsertDocument(db, function(){
    db.close();
  });
});

// Insert Single Doc
const InsertDocument = function(db, callback) {
  // get Collection
  const collection = db.collection('users');
  // insert Docs
  collection.insert({
    name: 'Wayne Allison',
    email: 'dickey25d@gmail.com'
  }, function(err, result) {
    if(err) {
      return console.dir(err);
    }
    console.log('Inserted Document');
    console.log(result);
    callback(result);
  });
}

const MongoClient = require('mongodb').MongoClient;

// Connection url

const url = 'mongodb://localhost:27017/mongomania';

MongoClient.connect(url, function(err, db){
  if(err) {
    return console.dir(err);
  }
  console.log('Connected to mongodb');
  /*
  InsertDocument(db, function(){
    db.close();
  });
  InsertMultiDocs(db, function(){
    db.close();
  });
  */
  FindDocuments(db, function(){
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

// Insert Multiple Documents

const InsertMultiDocs = function(db, callback) {
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
    console.log('Inserted ' + result.ops.length + ' documents');
    callback(result);
  });
}

// Find documents

const FindDocuments = function(db, callback) {
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

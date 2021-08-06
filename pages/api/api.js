// const { MongoClient } = require('mongodb');
// const uri = "mongodb+srv://jbillecci:CosmoRudy123@cluster0.x0n7n.mongodb.net/nftmarketplace?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

const mongoose = require('mongoose');

mongoose.connect(
  'mongodb+srv://jbillecci:CosmoRudy123@cluster0.x0n7n.mongodb.net/nftmarketplace?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('connected to db');
});

export default function handler(req, res) {

}

const UserSchema = new mongoose.Schema({
  name: String,
  key: String
});



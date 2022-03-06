const mongodb=require('mongodb')
const mongoClient=mongodb.MongoClient

const connectionUrl='mongodb://127.0.0.1:27017'
const databaseName='task-manger'

mongoClient.connect(connectionUrl,{ useNewUrlParser: true },(error,client)=>{
 if(error){
     return console.log("unable to connect to data base");
 }

 const db=client.db(databaseName)
 db.collection('users').insertOne({
     name:'mohamed',
     age:26
 })

})
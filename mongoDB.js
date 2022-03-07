const {MongoClient,ObjectID, ObjectId} = require("mongodb");
;

const connectionUrl = "mongodb://127.0.0.1:27017";
const databaseName = "task-manger";
//id buffer vs string 
/*const id=new ObjectID()
console.log(id.id.length);
console.log(id.toHexString().length);*/

MongoClient.connect(
  connectionUrl,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("unable to connect to data base");
    }

    const db = client.db(databaseName);
    /*//update one
    db.collection('users').updateOne(
     {
       _id:new ObjectId('6224c227ba152d8782f82b65')
     }
     ,{
       $set:{
         name:'ali'
       },
       $inc:{
         age:100
       }
     }
    ).then((res)=>{console.log(res);}).catch((error)=>{console.log(error);})
   */
  /*
    //update many
   db.collection('tasks').updateMany(
    {
      completed : false
    },
    {$set: {
      description:"up"
    }
  } 
      
  

   ).then((res)=>{console.log(res.modifiedCount);}).catch((error)=>{console.log(error);})
*/
//delete
    db.collection('users').deleteMany({name:'ali'}).then((res)=>{console.log(res.deletedCount);}).catch((error)=>{console.log(error);})
 
/*
//find one
  db.collection('users'). findOne( {name:'nada'},(error, user)=>{
      if (error) {

          return log ('no user found')
      }
       console.log(user);
      
  })
 //find many
 db.collection('tasks').find({ completed: false }).toArray((error,tasks)=>{console.log(tasks);})
 //count
 db.collection('tasks').find({ completed: false }).count((error,count)=>{console.log(count);})

   
   /*
 //insert many 
   db.collection("users").insertMany([
      {
        name: "mohamed",
        age: 26,
      },{
        name: "Ahmed",
        age: 22,
      },
      {
        name: "nada",
        age: 24,
      },{
        name: "hager",
        age: 21,
      }
    ],
      (error, result) => {
         if(error){
             console.log('error insert');
         }      
        console.log(result.insertedId);
     
    }
    );
    /*db.collection('tasks').insertMany([
        {
            description: 'Clean the house',
            completed: true
        },{
            description: 'Renew inspection',
            completed: false
        },{
            description: 'Pot plants',
            completed: false
        }
    ], (error, result) => {
        if (error) {
            return console.log('Unable to insert tasks!')
        }

        console.log(result.ops)
    })
    */
   
  }
);

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',{useNewUrlParser: true }, (err, client)=>{
    if(err){
        return console.log('Unable to connect to MongoDB Server');
    }

    console.log('Connected to MongoDB Server');

    let db = client.db('TodoApp');

    // db.collection('Users').deleteMany({name: "Jephtah"}).then((result)=>{
    //     console.log(result);
    // })

    db.collection('Users').findOneAndDelete({_id: new ObjectID('5b6fce8057f2557b0c273dd7')}).then((result)=>{
        console.log(result);
    })
}); 
//the argument above should be the url where your code lives and can be an amazon web server or naything in prod


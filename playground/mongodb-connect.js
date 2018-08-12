const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',{useNewUrlParser: true }, (err, client)=>{
    if(err){
        return console.log('Unable to connect to MongoDB Server');
    }

    console.log('Connected to MongoDB Server');

    let db = client.db('TodoApp');

    // db.collection('Todos').insertOne({
    //     //2args - keyvalue pair and a callback
    //     text: 'Something to do',
    //     completed: false

    // }, (err, result) => {
    //     if(err){
    //         return console.log('unable to insert todo', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2))
    // })

    db.collection('Users').insertOne({
        name: "Jephtah",
        age: 23,
        location: "USA"

    }, (err, result) => {
        if(err){
            return console.log("Unable to insert user into the base", err);
        }

        console.log(JSON.stringify(result.ops, undefined, 2));
    })

    client.close();

}); 

//the argument above should be the url where your code lives and can be an amazon web server or naything in prod


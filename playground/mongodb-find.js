const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',{useNewUrlParser: true }, (err, client)=>{
    if(err){
        return console.log('Unable to connect to MongoDB Server');
    }

    console.log('Connected to MongoDB Server');

    let db = client.db('TodoApp');

    // db.collection('Todos').find({
    //     _id: new ObjectID('5b6f7563ca7c0c58a88fcc06')
    // }).toArray().then((docs)=>{
    //     console.log(docs);
    // }, (err)=>{
    //     console.log ("Unable to perform fetch", err);
    // })

    // db.collection('Todos').find().count().then((count)=> {
    //     console.log(`Todos count: ${count}`)
    // }, (err)=>{
    //     console.log('unable to fetch todos', err);
    // })
    // client.close();


    db.collection('Users').find({name: "Jephtah"}).count().then((count)=>{
        console.log(`Todos count: ${count}`)
    }, (err)=>{
        console.log('Unable to get the count of users with name as Jephtah', err);
    })
}); 
//the argument above should be the url where your code lives and can be an amazon web server or naything in prod


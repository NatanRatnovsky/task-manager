const {MongoClient, ObjectID} = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

const id = new ObjectID();

MongoClient.connect(connectionURL, {useNewUrlParser: true}, ((error, client) => {
    if (error) {
        return console.log('Unable to connect to database!');
    }

    const db = client.db(databaseName);

    db.collection('new-tasks').deleteOne({
        _id: new ObjectID("61525a8f926871536f01ad4a")
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error);
    });
}))

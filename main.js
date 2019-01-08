const { Db } = require("mongodb");
const MongoClient = require("mongodb").MongoClient;
const test = require("assert");

const url = 'mongodb://localhost:27017';

const dbName = "nodemongo"

MongoClient.connect(url, {useNewUrlParser: true}, function(err, client) {

    if(err) {
        throw err;
    }

    const col = client.db(dbName).collection('createIndexExample1');

    // col.insertMany([{first: "Sandeep", last: "Sanadi", options: {school: "No", age: 47}}], function(err, result) {
    //     if(err) {
    //         console.error(err);
    //     }
    //     console.log(result);
    // });

    col.findOne({first: "Sandeep"}, {first: true, last: true, options: {school: true, age: true}}, function(err, result) {
        if(err) {
            console.error(err);
        }

        console.log(result);
    });
    
    client.close();
});
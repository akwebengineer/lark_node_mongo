const mongo = require('../modules/db/dbInit.js');

const createDatabaseCollections  = require('../modules/db/createCollections.js');
const collections = require('./db/collections').collections;

const connection = mongo.init();

connection.then((db) => {
    collections.map((collection) => {
        const res = createDatabaseCollections.createCollection(db, collection);
        res.then((response) => {
            console.log(`Created collection: ${collection}`);
        }).catch((err) => {
            console.log('Error creating collection');
        });
    });
})
.catch((err)=>{
    console.log('Error connecting to database...');

});

//import mongodb driver
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;

const conf = require('../../conf/appConf.js').mongoDB;
const url = `mongodb://${conf.URL}:${conf.PORT}`;

const init = () => {
    let initPromise = new Promise((resolve, reject) => {
MongoClient.connect(url, (err, client) => {
    if (err){
        console.log('Error connecting to database..');
        reject(err);
    }
    else {
        const db = client.db(conf.DB);
        console.log('Connected to database..');
        resolve(db);
    }
});
    });
    return initPromise;
}

const close = (db) => {
    db.close();
};

const createDBCollection = (db, collection) => {
    db.createCollection("customers", function(err, res) {
      if (err) throw err;
      console.log("Collection created!");
      db.close();
    });
}

module.exports = {
    init,
    close
};
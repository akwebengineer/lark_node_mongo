const createCollection = (_db, _collection) => {
    const collectionPromise = new Promise((resolve, reject) => {
        _db.createCollection(_collection, (err, res) => {
            if (err){
                reject(err);
            }
            else {
                resolve(res);
            }
        });
    });

    return collectionPromise;
}

module.exports = {
    createCollection
};
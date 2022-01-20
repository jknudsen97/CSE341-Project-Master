const fs = require('fs');
const path = require('path');

const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'items.json'
);

const getDataFromFile = cb =>{
    fs.readFile(p, (err, fileData) => {
        if (err){
            cb([]);
        } else{
            cb(JSON.parse(fileData));
        }
    })
}

module.exports = class Objects {
    constructor(tags, imageUrl, price, name, description) {
        this.tags = tags;
        this.imageUrl = imageUrl;
        this.price = price;
        this.name = name;
        this.description = description;
    }

    static fetchAll(cb) {
        getDataFromFile(cb);
    }
}
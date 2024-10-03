const mongoose = require("mongoose");

const connectionMongodb = async(url) => {
        return mongoose.connect(url)
        .then(() => console.log('Mongodb Connected......'))
        .catch((err) => console.log('Some error occure', err));
}

module.exports = {
        connectionMongodb,
}
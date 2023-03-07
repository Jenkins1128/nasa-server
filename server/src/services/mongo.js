const mongoose = require('mongoose');

mongoose.connection.once('open', () => {
    console.log('MongoDB connection ready!');
});

mongoose.connection.on('error', (err) => {
    console.log(err);
});

const MONGO_URL = 'mongodb+srv://nasa-api:bctF0XYvE8b85dRz@nasacluster.awacire.mongodb.net/nasa?retryWrites=true&w=majority';

async function mongoConnect() {
    await mongoose.connect(MONGO_URL);
}

async function mongoDisconnect() {
    await mongoose.disconnect();
}

module.exports = {
    mongoConnect,
    mongoDisconnect
}
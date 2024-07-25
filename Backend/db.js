const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost:27017/myinotebook";

const ConnectToMongo = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connected to MongoDB");
    } catch (e) {
        console.log("Error connecting to MongoDB:", e.message);
    }
}

module.exports = ConnectToMongo;

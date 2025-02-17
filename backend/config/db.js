const mongoose = require('mongoose');

const dburl = "mongodb+srv://nilnaga:1234@cluster0.j75op.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.set("strictQuery", true, "useNewUrlParser", true);

const connection = async () => {
    try {
        await mongoose.connect(dburl); 
        console.log('Database connected');
    } catch (e) {
        console.error(e.message);
        process.exit();
    }
};

module.exports = connection;
const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://MHNx3086:Vizizvvjw19!@cluster0.gmyjfae.mongodb.net/task_manager';
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

mongoose
    .connect(mongoURI, options)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });
// const mongoose = require('mongoose');
// require('dotenv').config();

// const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/Organizations';

// mongoose.connect(MONGODB_URI)
//   .then(() => {
//     console.log('Connected to MongoDB');
//   })
//   .catch((error) => {
//     console.error('Error connecting to MongoDB:', error);
//   });

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// module.exports = db;
// // database.js

// const mongoose = require('mongoose');
// require('dotenv').config();

// const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/Organization';

// async function connectDB() {
//     try {
//         await mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
//         console.log('Connected to MongoDB');
//     } catch (error) {
//         console.error('Error connecting to MongoDB:', error);
//     }
// }

// module.exports = connectDB;

// const dbconnect = async () => {
//     await mongoose.connect('<MongoDB_URI>');
//     console.log("Connected to Database");
// }

// dbconnect().catch((err) => console.error(err));

const mongoose = require('mongoose');
require('dotenv').config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/Organization';

mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

const connectDB = mongoose.connection;
connectDB.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = connectDB;


// const mongoose = require('mongoose');
// require('dotenv').config();

// const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/Organizations';

// mongoose.connect(MONGODB_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     bufferCommands: false, // Disable buffering
//     bufferMaxEntries: 0,   // Disable command buffering
//     serverSelectionTimeoutMS: 5000, // Timeout for server selection
//     socketTimeoutMS: 45000, // Timeout for socket connections
// })
// .then(() => {
//     console.log('Connected to MongoDB');
// })
// .catch((error) => {
//     console.error('Error connecting to MongoDB:', error);
// });

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// module.exports = db;

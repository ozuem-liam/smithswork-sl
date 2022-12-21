const mongoose = require('mongoose');
const app = require('./app');

let dbURI = "mongodb+srv://liam:gateway2020@cluster0.bo39v.mongodb.net/smithswork?retryWrites=true&w=majority" || process.env.MONGO_URI;

const port = process.env.PORT || 8080;

mongoose
  .connect(dbURI)
  .then(() => {
    console.clear();
    console.log('Mongoose connection done');
    app.listen(port, () => {
      console.log(`server listening on ${port}`);
    });
  })
  .catch((e) => {
    console.log('Mongoose connection error');
    console.log(e)
  });

// CONNECTION EVENTS
// When successfully connected
mongoose.connection.on('connected', () => {
  console.log('Mongoose default connection open to ' + dbURI);
});


// If the connection throws an error
mongoose.connection.on('error', (err) => {
  console.log('Mongoose default connection error: ' + err);
});

// When the connection is disconnected
mongoose.connection.on('disconnected', () => {
  console.log('Mongoose default connection disconnected');
});

// If the Node process ends, close the Mongoose connection (ctrl + c)
process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});

process.on('uncaughtException', (err) => {
  console.log('Uncaught Exception: ' + err);
});

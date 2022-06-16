const mongoose = require('mongoose');

module.exports = () => {
  return new Promise((resolve, reject) => {
    mongoose.connect('mongodb://localhost:27017', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })

    const db = mongoose.connection;

    db.on('error', (err) => {
      console.log('connection error: ' + err.message);
      reject(err);
    })

    db.on('open', () => {
      console.log('DB connected!');
      resolve();
    })
  })
}
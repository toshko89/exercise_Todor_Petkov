const mongoose = require('mongoose');

const groceriesSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true
  },
  deal: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /https?:\/\//i.test(v);
      }
    }
  }
})

const Groceries = mongoose.model('Groceries', groceriesSchema);

module.exports = Groceries;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  barcode:  Number,
  productName: String,
  size: String,
  productCode: String,
  stockCount: Number,
  pickCount: Number,
  color: String
});

module.exports = mongoose.model('Product', productSchema);

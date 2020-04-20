const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Product = new Schema(
  {
    author: { type: String, required: true },
    name: { type: String, required: true },
    imgURL: { type: String, required: true },
    description: { type: String, required: true },
    sub_title: { type: String, required: true },
    like: { type: Number, required: true },
  },
  { timestamps: true }
)

module.exports = mongoose.model('products', Product)
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Post = new Schema(
  {
    author: { type: String, required: true },
    name: { type: String, required: true },
    imgURL: { type: String, required: true },
    description: { type: String, required: true },
    sub_title: { type: String, required: true },
    like: { type: Number, required: false },
    user_id: { type: Schema.Types.ObjectId, ref: 'user_id' }
    
  },
  { timestamps: true }
)

module.exports = mongoose.model('Posts', Post)
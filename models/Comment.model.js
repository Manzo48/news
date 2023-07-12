const mongoose = require('mongoose');

const commentSchema =  mongoose.Schema({
    userName: String,
    content: String,
    createdAt: {
      type: Date,
      default: Date.now
    },
    news: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'News'
    }
  });
const Comment = mongoose.model("Comment", commentSchema)

module.exports = Comment
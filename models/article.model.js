const mongoose = require('mongoose');

const Article = mongoose.model('article', new mongoose.Schema(
  {
    title: String,
    description: String,
    images: [String],
    img: String,
    tags: [String],
    date: String
  },
  {
    timestamps: true
  }
));

module.exports = Article;

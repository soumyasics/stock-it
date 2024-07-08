const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");
const articleSchema = new Schema({
  tutorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "tutors",
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  subTitle: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  conclusion: {
    type: String,
    required: true,
  },
});
const ArticleModel = model("Article", articleSchema);

module.exports = { ArticleModel };

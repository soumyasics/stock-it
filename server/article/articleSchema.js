const mongoose = require("mongoose");
const { Schema, model } = mongoose;
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

  thumbnail: {
    type: Object,
    required: true,
  },
  video: {
    type: Object,
    required: true,
  },
});
const ArticleModel = model("Article", articleSchema);

module.exports = { ArticleModel };

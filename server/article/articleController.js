const { ArticleModel } = require("./articleSchema");

const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./upload");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const uploadVideo = multer({ storage: storage }).any();


const createArticle = async (req, res) => {
  try {
    const { title, tutorId, subTitle, category, content, conclusion } =
      req.body;
    if (
      !title ||
      !tutorId ||
      !subTitle ||
      !category ||
      !content ||
      !conclusion
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newArticle = new ArticleModel({
      title,
      tutorId,
      subTitle,
      category,
      content,
      conclusion,
      thumbnail: req.files[0],
      video: req.files[1],
    });
    await newArticle.save();
    return res
      .status(201)
      .json({ msg: "Article created successfully", data: newArticle });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getAllArticles = async (req, res) => {
  try {
    const articles = await ArticleModel.find().populate("tutorId").exec();
    return res.status(200).json({ message: "All Articles", data: articles });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const getArticleById = async (req, res) => {
  try {
    const article = await ArticleModel.findById(req.params.id);
    return res.status(200).json({ message: "Article", data: article });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const getArticleByTutorId = async (req, res) => {
  try {
    const article = await ArticleModel.find({ tutorId: req.params.id });
    return res.status(200).json({ message: "Article", data: article });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const updateArticleById = async (req, res) => {
  try {
    const { title, subTitle, category, content, conclusion } = req.body;
    let updateField = {};
    if (title) {
      updateField.title = title;
    }
    if (subTitle) {
      updateField.subTitle = subTitle;
    }
    if (category) {
      updateField.category = category;
    }
    if (content) {
      updateField.content = content;
    }
    if (conclusion) {
      updateField.conclusion = conclusion;
    }
    if (req.files[0]) {
      updateField.thumbnail = req.files[0];
    }
    if (req.files[1]) {
      updateField.video = req.files[1];
    }
    const article = await ArticleModel.findByIdAndUpdate(
      req.params.id,
      updateField,
      {
        new: true,
      }
    );
    return res.status(200).json({ message: "Article updated", data: article });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const deleteArticleById = async (req, res) => {
  try {

    const article = await ArticleModel.findByIdAndDelete(req.params.id);
    return res.status(200).json({ message: "Article deleted", data: article });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};



module.exports = {
  createArticle,
  getAllArticles,
  getArticleById,
  getArticleByTutorId,
  updateArticleById,
  deleteArticleById,
  uploadVideo,
};

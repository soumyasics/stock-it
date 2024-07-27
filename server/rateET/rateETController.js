const { RateETModel } = require("./rateETSchema");
const mongoose = require("mongoose");

const addRating = async (req, res) => {
  try {
    const { userId, etId, rating, review } = req.body;
    if (!userId || !etId || !rating || !review) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    if (
      !mongoose.isValidObjectId(etId) ||
      !mongoose.isValidObjectId(userId)
    ) {
      return res.status(400).json({
        success: false,
        message: "Invalid IDs.",
      });
    }

    const rateFreelancer = new RateETModel({
      userId,
      etId,
      rating,
      review,
    });
    await rateFreelancer.save();

    const prevRatings = await RateETModel.find({ etId });
  
    const totalRates = prevRatings.reduce((acc, curr) => {
      return acc + curr.rating;
    }, 0);

    freelancer.rating = totalRates / prevRatings.length;;
    await freelancer.save();
    

    return res.status(200).json({
      message: "Rating added successfully",
      success: true,
      currentRating: freelancer.rating ,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getAllRating = async (req, res) => {
  try {
    const rating = await RateETModel.find()
      .populate("userId")
      .populate("etId")
      .exec();
    return res.status(200).json({
      message: "Rating fetched successfully",
      success: true,
      data: rating,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getAllRatingByETId = async (req, res) => {
  try {
    const { id } = req.params;
    const rating = await RateETModel.find({ etId: id })
      .populate("userId")
      .populate("etId")
      .exec();
    return res.status(200).json({
      message: "Rating fetched successfully",
      success: true,
      data: rating,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = { addRating, getAllRating, getAllRatingByETId };

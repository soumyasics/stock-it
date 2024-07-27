const { SubscribeModel } = require("./subscribeSchema");
const mongoose = require("mongoose");
const { UserModel } = require("../user/userSchema");
const { TutorModel } = require("../Tutors/tutorSchema");
const newSubscription = async (req, res) => {
  try {
    const { userId, ETId } = req.body;

    if (!userId || !ETId) {
      return res.status(400).json({ message: "All fields are required." });
    }
    const user = await UserModel.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "Parent not found" });
    }

    const et = await TutorModel.findById(ETId);
    if (!et) {
      return res.status(404).json({ message: "Health Professional not found" });
    }

    const existingSubscription = await SubscribeModel.findOne({
      userId,
      ETId,
    });

    if (existingSubscription) {
      return res.status(409).json({ message: "You alredy subscribed." });
    }

    const newSubscription = new SubscribeModel({
      userId,
      ETId,
    });
    await newSubscription.save();
    return res
      .status(201)
      .json({ message: "Subscribed", data: newSubscription });
  } catch (error) {
    console.error("Error in  subscribe: ", error);
    return res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

const getAllSubscriptionByUserId = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid userId" });
    }
    const subscriptions = await SubscribeModel.find({ userId: id })
      .populate("ETId")
      .populate("userId")
      .exec();

    return res.status(200).json({ message: "Subscriptions", data: subscriptions });
  } catch (error) {
    console.error("Error in getAllSubscriptionByParentId: ", error);
    return res
      .status(500)
      .json({ message: "Internal server error", error: error });
  }
};

const getAllSubscriptionByETId = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid ETId" });
    }
    const subscriptions = await SubscribeModel.find({
      ETId: id,
    });
    return res
      .status(200)
      .json({ message: "Subscriptions", data: subscriptions });
  } catch (error) {
    console.error("Error in getAllSubscriptionByHPId: ", error);
    return res
      .status(500)
      .json({ message: "Internal server error", error: error });
  }
};

const getAllSubscriptions = async (req, res) => {
  try {
    const allSubscriptions = await SubscribeModel.find()
      .populate("userId")
      .populate("ETId")
      .exec();
    return res.status(200).json({
      message: "All subscriptions",
      data: allSubscriptions,
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error });
  }
};

const getSubscriptionStatus = async (req, res) => {
  try {
    const { userId, ETId } = req.body;

    if (!userId || !ETId) {
      return res.status(400).json({ message: "Parent id and HP id required." });
    }
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ message: "Invalid userId" });
    }

    if (!mongoose.Types.ObjectId.isValid(ETId)) {
      return res.status(400).json({ message: "Invalid ETId" });
    }

    const isSubscribed = await SubscribeModel.findOne({
      userId,
      ETId,
    });

    if (isSubscribed) {
      return res
        .status(200)
        .json({ suscriptionStatus: true, message: "Subscribed" });
    } else {
      return res
        .status(200)
        .json({ suscriptionStatus: false, message: "Not subscribed" });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

module.exports = {
  newSubscription,
  getAllSubscriptionByUserId,
  getAllSubscriptionByETId,
  getSubscriptionStatus,
  getAllSubscriptions,
};

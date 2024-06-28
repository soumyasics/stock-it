const mongoose = require("mongoose");
const { Schema } = mongoose;

const tSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    qualification: {
        type: String,
        required: true,
    },
    background: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    specialization: {
        type: String,
        required: true,
    },
    experience: {
        type: Number,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    pincode: {
        type: String,
        required: true,
    },
    photo: {
        type: Object,
        required: true,
    },
    contactNumber: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },

isActive:{
    type:Boolean,
    default:false
},
adminApproved:{
    type:Boolean,
    default:false
}
});

const UserModel = mongoose.model("tutors", tSchema);

module.exports = { UserModel };

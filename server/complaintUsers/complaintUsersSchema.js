const mongoose = require("mongoose");
const UserComplaintSchema =  mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    }, 
    companyId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "companies",
        required: true,
    },
    complaint: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: "Pending"
    }
})

module.exports = mongoose.model("UserComplaint", UserComplaintSchema)

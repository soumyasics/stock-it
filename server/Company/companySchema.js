const mongoose = require("mongoose");

const companySchema = mongoose.Schema({

    name: {
        type: String,
        require: true,
    },
    pincode: {
        type: Number,
        require: true,
    },
    companyType: {
        type: String,
        require: true,
    },
    year: {
        type: Number,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    website: {
        type: String,
        require: true,
    },
    state: {
        type: String,
        require: true,
    },
    city:{
        type: String,
        require: true,
    }
    ,
    contact: {
        type: Number,
        require: true,
    },
    district: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    logo: {
        type: Object,
        required: true,
    },
    license: {
        type: Object,
        required: true,
    },
    description: {
        type: String,
        require: true,
    },
    regNo: {
        type: String,
        require: true,
    },
    adminApproved:{
        type:Boolean,
        default:false
    },
    isActive:{
        type:Boolean,
        default:false
    }
})
module.exports = mongoose.model('companies', companySchema)
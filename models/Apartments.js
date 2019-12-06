const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ApartmentsSchema = new Schema({
    ownerName: {
        type: String,
        required: true
    },
    ownerPhoneNumber: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    latitude: {
        type: Number,
        required: true
    },
    longitude:{
        type:Number,
        required:true
    },
    buyerName:{
        type:String,
        default:null
    },
    buyerPhoneNumber:{
        type:Number,
        default:null
    }
})
const Apartments = mongoose.model('Apartments', ApartmentsSchema)

module.exports = Apartments
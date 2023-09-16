import mongoose from "mongoose"

const Schema = mongoose.Schema

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United']
    },
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
        default: 'DEN'
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999,
    },
    departs: {
        type: Date,
        default: function() {
            return new Date().getFullYear() //need to make 1 year from current year
        }} 
    }, {
    timestamps: true
})

const Flight = mongoose.model('Flight', flightSchema)

export {
  Flight
}
import mongoose from "mongoose"

const Schema = mongoose.Schema

const ticketSchema = new Schema({
    passengerName: String,
    ticketNo: Number,
    row: {
        type: Number,
        min: 1,
        max: 46,
        default: 10,
    },
    seat: {
        letter: String,
        enum: ['A', 'B', 'C', 'D', 'E', 'F'],
    }
  }, {
    timestamps: true
  })

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United', 'Delta']
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
        type: Number,
        default: function() {
            return new Date().getFullYear() + 1 
        }},
    tickets: [ticketSchema],
}, {
    timestamps: true
})

const Flight = mongoose.model('Flight', flightSchema)

export {
  Flight
}
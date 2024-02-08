const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
    name: { type: String },
    username: { type: String },
    email: { type: String },
    address: {
        type: Object,
        properties: {
            street: { type: String },
            suite: { type: String },
            city: { type: String },
            zipcode: { type: Number },
            geo: {
                type: Object,
                properties: {
                    lat: { type: Number },
                    lng: { type: Number }
                }
            }
        }
    },
    phone: { type: String },
    website: { type: String },
    company: {
        type: Object,
        properties: {
            name: { type: String },
            catchPhrase: { type: String },
            bs: { type: String }
        }
    }
})
module.exports = mongoose.model("users", UserSchema)
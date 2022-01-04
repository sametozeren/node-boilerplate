const Mongoose = require('mongoose');
const UserSchema = new Mongoose.Schema({
    email: String,
    username: String,
    password: String
}, {
    timestamps: true,
    versionKey: false
});

module.exports = Mongoose.model('users', UserSchema);
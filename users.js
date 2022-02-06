const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

    userAddress: String,
    socketRoomId: String,

}, {
    timestamps: true,
    versionKey: false,
});


const UserSchema = mongoose.model('Users', userSchema, 'Users');

module.exports = {
    UserSchema
}
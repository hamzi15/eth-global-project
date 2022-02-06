const mongoose = require('mongoose');

const chatSchema = mongoose.Schema({

    senderAddress: {
        type: String,
    },
    receiverAddress: {
        type: String,
    },
    message: {
        type: String,
    }

}, {
    timestamps: true,
    versionKey: false,
});


const ChatSchema = mongoose.model('Chats', chatSchema, 'Chats');

module.exports = {
    ChatSchema,
}
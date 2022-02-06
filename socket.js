const { ChatSchema } = require('./chat');
module.exports = (io) => {
    io.on('connection', (socket) => {
        console.log(`new client connected ${new Date()}`);

        socket.emit('connectionSuccess', 'Hello from eth global server ...');

        socket.on('message', async data => {
            console.log('Message ::: ', data);
            const { senderAddress, receiverAddress, message } = data;
            const chatObj = new ChatSchema({ 
                senderAddress: senderAddress,
                receiverAddress: receiverAddress,
                message: message,

            });
            await chatObj.save();
            
        });
    });
};

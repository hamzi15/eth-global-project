module.exports = (io) => {
    io.on('connection', (socket) => {
        console.log(`new client connected ${new Date()}`);

        socket.emit('connectionSuccess', 'Hello from sabhi server ...');

        socket.on('room', (room) => {
            console.log(`room ${room}`);
            socket.join(room);
            // io.to(room).emit('applicantReport', room);
        });
    });
};

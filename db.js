
const mongoose = require("mongoose");
const chalk = require('chalk');
const mongoUrl = process.env.DB_URL;

mongoose.Promise = global.Promise;
mongoose.set("useCreateIndex", true);

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000
};


const msToTime = duration => {
    let milliseconds = parseInt((duration % 1000) / 100),
        seconds = Math.floor((duration / 1000) % 60),
        minutes = Math.floor((duration / (1000 * 60)) % 60),
        hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    return hours + ":" + minutes + ":" + seconds;
}

const connectWithRetry = () => {
    let delay = 5000;
    return mongoose.connect(mongoUrl, options, (err) => {
        if (err) {
            console.error(`Failed to connect to mongo on startup - retrying in ${msToTime(delay)} \n`, chalk.red(err.message));
            setTimeout(connectWithRetry, delay);
        } else {
            console.log("%s 🚀 Successfully connected to the database", chalk.green('✓'));
        }
    });
};

connectWithRetry();
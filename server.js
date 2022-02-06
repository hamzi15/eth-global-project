const express = require('express');
// const serverless = require('serverless-http');
const chalk = require('chalk');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const cool = require('cool-ascii-faces');
const morgan = require('morgan');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server, {
  cors: {
    origins: [
      'http://localhost:3000',
      'http://localhost:3001',
      'https://www.app.sabhi.org',
    ],
    methods: ['GET', 'POST',],
  },
});
// const swaggerUi = require('swagger-ui-express');
// const swaggerDocument = require('./swagger/swagger.json');
global.io = io;
require('dotenv').config();
// const timeout = require('connect-timeout');

// db config 🐰
require('./db');

// providing a Connect/Express middleware that can be used to enable CORS with various options.
app.use(cors());
app.use(compression());


// Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
// app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(express.json({ limit: '5mb' }));
app.use(
  express.urlencoded({
    extended: true,
  })
);

// another logger to show logs in console as well
app.use(morgan('combined'));

// Helmet helps you secure your Express apps by setting various HTTP headers. It’s not a silver bullet, but it can help!
// DOC: https://helmetjs.github.io/ 😎
app.use(helmet());

// const publicDir = require('path').join(__dirname, './public');
// console.log(publicDir);
// app.use(express.static(publicDir));

// app.use(timeout('300s'));

// Enable if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)
// see https://expressjs.com/en/guide/behind-proxies.html
// app.set('trust proxy', 1);

// const limiter = rateLimit({
//     windowMs: 15 * 60 * 1000, // 15 minutes
//     max: 5, // limit each IP to 100 requests per windowMs
//     message:
//         'Too many accounts created from this IP, please try again after an hour',
// });

// default api route 😈
app.get('/', (req, res, next) => {
  return res.status(200).json({
    status: true,
    message: 'Welcome to Eth Global! api',
    cheers: cool(),
    //  docs: `${process.env.BASE_URL}docs`,
  });
});

// app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// import all routes at once
// require('./src/utils/routes.utils')(app);

// Handling non-existing routes
// require('./src/utils/error-handler.utils')(app);

const port = process.env.PORT || 9000;

// initilizing server 😻
server.listen(port, () =>
  console.log(`%s 🚀 Server is listening on port ${port} `, chalk.green('✓'))
);


require('./socket')(io);



const { UserSchema } = require('./users');
app.post('/user/add', async (req, res, next) => {
  try {

    const { userAddress } = req.body;
    const user = new UserSchema({
      userAddress: userAddress,
    });

    const data = await user.save();

    return res.json({
      success: true,
      data: data,
    });

  } catch (error) {
    return res.json({
      success: false,
      message: 'something went wrong!',
    })
  }
})


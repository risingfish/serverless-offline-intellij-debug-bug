const express = require('express');
const router = express.Router();
const serverless = require('serverless-http');

const app = express();

router.get('/', async (req, res) => {
    return res.json({"message": "hi"});
})


app.use(router);

/*
 Wrap the application in the serverless http translator. This makes it so that a lambda event is turned into an express
 request object for interfacing with express for routing.
 */
module.exports.handler = serverless(app);

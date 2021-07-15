const rateLimit = require("express-rate-limit");

const limiterAccount = rateLimit({
    windowMs: 24 * 60 * 60 * 1000, // 24 Heures 
    max: 3, // limit each IP to 3 requests per windowMs
});

//  apply to all requests
module.exports = limiterAccount;
const rateLimit = require("express-rate-limit");

const limiterAccount = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 heure
    max: 3, // limit each IP to 3 requests per windowMs
});

//  apply to all requests
module.exports = limiterAccount;
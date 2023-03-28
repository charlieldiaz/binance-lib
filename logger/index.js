const devLogger = require('./devLogger')
let logger = null;

if (process.env.NODE_ENV !== 'production') {
    logger = devLogger();
}

// Further loggers ex: production. Can be added here.

module.exports = logger;
const binanceLogger = require('./binanceLogger')
let logger = null;

if (process.env.NODE_ENV !== 'production') {
    logger = binanceLogger();
}

// Further loggers ex: production. Can be added here.

module.exports = logger;
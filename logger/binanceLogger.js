const { createLogger, format, transports } = require('winston');
const winston = require('winston');
const { combine, timestamp, printf } = format;

const myFormat = printf(({ level, message, timestamp }) => {
    return `{"time": ${timestamp}, "level": ${level}, "weight": ${message.weight}, "status": ${message.status}, "action": ${message.action} }`;
});

function binanceLogger() {
    return createLogger({
        format: combine(
            timestamp({ format: "HH:mm:ss" }),
            myFormat
        ),

        defaultMeta: { service: 'user-service' },
        transports: [
            new transports.Console(),
            new winston.transports.File({
                filename: 'combined.log',
                level: 'debug'
            })
        ],
    });
}

module.exports = binanceLogger;
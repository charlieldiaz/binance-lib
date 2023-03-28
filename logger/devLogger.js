const { createLogger, format, transports } = require('winston');
const { combine, timestamp, printf } = format;

const myFormat = printf(({ level, message, timestamp }) => {
    return `{"time": ${timestamp}, "level": ${level}, "weightPerMin": ${message.weight}, "status": ${message.status}, "action": ${message.action}${message.url ? `, "url": "${message.url}",` : ''}${message.errorCode ? `"errorCode": ${message.errorCode}` : ''}}`
});

function devLogger() {
    return createLogger({
        transports: [
            new transports.Console({
                level: 'debug',
            }),

            new transports.File({
                filename: 'debugCombined.log',
                level: 'debug',

            }),
            new transports.File({
                filename: 'error.log',
                level: 'error',
            })
        ],

        format: combine(
            timestamp({ format: "HH:mm:ss" }),
            myFormat
        ),

        defaultMeta: { service: 'user-service' },
    });
}

module.exports = devLogger;
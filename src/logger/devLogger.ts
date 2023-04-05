const { createLogger, format, transports } = require("winston");
const { combine, timestamp, printf } = format;

interface myformatParams {
  level: string;
  message: {
    status: number;
    endPoint: string;
    weight: number;
    url?: string;
    errorCode?: number;
    errorMsg?: string;
  };
  timestamp: number;
}
const myFormat = printf(({ level, message, timestamp }: myformatParams) => {
  return `{"time": ${timestamp}, "level": ${level}, "weightPerMin": ${
    message.weight
  }, "status": ${message.status}, "endPoint": ${message.endPoint}${
    message.url ? `, "url": "${message.url}",` : ""
  }${message.errorCode ? `"errorCode": ${message.errorCode}` : ""}${
    message.errorMsg ? `"errorMsg": ${message.errorMsg}` : ""
  }}`;
});

export default function devLogger() {
  return createLogger({
    transports: [
      new transports.Console({
        level: "debug",
      }),

      new transports.File({
        filename: "debugCombined.log",
        level: "debug",
      }),
      new transports.File({
        filename: "error.log",
        level: "error",
      }),
    ],

    format: combine(timestamp({ format: "HH:mm:ss" }), myFormat),

    defaultMeta: { service: "user-service" },
  });
}

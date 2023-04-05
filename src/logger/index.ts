import devLogger from "./devLogger";
let logger = null;

// if (process.env.NODE_ENV !== "production") {
export default logger = devLogger();
// }else{production logger}

// Further loggers ex: production. Can be added here.

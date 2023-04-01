const util = require("../util")
const { fetchData } = require('./fetchData')

require("dotenv").config();
const secretKey = process.env.SECRET_KEY
const apiKey = process.env.API_KEY



async function sendNewOrder(symbol, price, side = "BUY", timeInForce = "GTC", type = "LIMIT", quantity) {
    const endPoint = "v1/order";
    const params = util.sortParamsAlphabeticallyOmitEmptySignV({ symbol, timestamp: Date.now(), side, type, quantity, price, timeInForce });
    const signature = util.getSignature(params, secretKey);

    let url = `${endPoint}?${params}&signature=${signature}`;

    const requestOptions = {
        headers: { 'X-MBX-APIKEY': apiKey },
        url,
        method: "POST"
    };

    const rawNeqwOrderData = await fetchData(requestOptions, endPoint)
    return rawNeqwOrderData
}

module.exports = { sendNewOrder }
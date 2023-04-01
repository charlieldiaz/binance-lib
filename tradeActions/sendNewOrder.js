const util = require("../util")
const localVariables = require("../localVariables")
const { fetchData } = require('./fetchData')




async function sendNewOrder(symbol, price, side = "BUY", timeInForce = "GTC", type = "LIMIT", quantity) {
    const endPoint = "v1/order";
    const params = util.sortParamsAlphabeticallyOmitEmptySignV({ symbol, timestamp: Date.now(), side, type, quantity, price, timeInForce });
    const signature = util.getSignature(params, localVariables.secretKey);

    let url = `${endPoint}?${params}&signature=${signature}`;

    const requestOptions = {
        headers: { 'X-MBX-APIKEY': localVariables.apiKey },
        url,
        method: "POST"
    };

    const rawNeqwOrderData = await fetchData(requestOptions, endPoint)
    return rawNeqwOrderData
}

module.exports = { sendNewOrder }
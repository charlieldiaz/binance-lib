const util = require("../util")
const localVariables = require("../localVariables")
const tradeActions = require('./index')
const axios = require('axios');
const { fetchData } = require('./fetchData')




async function getNewOrder(symbol, price, side = "BUY", timeInForce = "GTC", type = "LIMIT", quantity = 1) {
    const endPoint = "order";
    const params = util.sortParamsAlphabeticallyOmitEmptySignV({ symbol, timestamp: Date.now(), side, type, quantity, price });
    const signature = util.getSignature(params, localVariables.secretKey);

    let url = `${endPoint}?${params}&signature=${signature}`;

    const requestOptions = {
        headers: { 'X-MBX-APIKEY': localVariables.apiKey },
        url,
        method: "GET"
    };

    const rawNeqwOrderData = await fetchData(requestOptions, endPoint)
    return rawNeqwOrderData
}

module.exports = { getNewOrder }
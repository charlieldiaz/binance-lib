const util = require("./util")
const localVariables = require("./localVariables")
const tradeActions = require("./tradeActions")
const axios = require('axios');


async function getOpenOrders(symbol) {
    const endPoint = "openOrders";
    const params = util.sortParamsAlphabeticallyOmitEmptySignV({ symbol, timestamp: Date.now() });
    const signature = util.getSignature(params, localVariables.secretKey);
    let url = `${tradeActions.TEST_NET_BASE_URL}${endPoint}?${params}&signature=${signature}`;
    const requestOptions = {
        headers: { 'X-MBX-APIKEY': localVariables.apiKey },
        url,
        method: "GET"
    };
    let response;
    try {
        response = await axios(requestOptions);
    } catch (e) {
        console.log(e)
    }
    return response.data
}

module.exports = { getOpenOrders }
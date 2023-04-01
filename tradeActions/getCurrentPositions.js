const util = require("../util")
const localVariables = require("../localVariables")
const { fetchData } = require('./fetchData')

async function getCurrentPositions(symbol = '') {
    const endPoint = "v2/positionRisk";
    const params = util.sortParamsAlphabeticallyOmitEmptySignV({ symbol, timestamp: Date.now() });
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

module.exports = { getCurrentPositions }
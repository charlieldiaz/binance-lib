const util = require("../util")
const { fetchData } = require('./fetchData')

require("dotenv").config();
const secretKey = process.env.SECRET_KEY
const apiKey = process.env.API_KEY


async function getCurrentPositions(symbol = '') {
    const endPoint = "v2/positionRisk";
    const params = util.sortParamsAlphabeticallyOmitEmptySignV({ symbol, timestamp: Date.now() });
    const signature = util.getSignature(params, secretKey);

    let url = `${endPoint}?${params}&signature=${signature}`;

    const requestOptions = {
        headers: { 'X-MBX-APIKEY': apiKey },
        url,
        method: "GET"
    };

    const rawNeqwOrderData = await fetchData(requestOptions, endPoint)
    return rawNeqwOrderData
}

module.exports = { getCurrentPositions }
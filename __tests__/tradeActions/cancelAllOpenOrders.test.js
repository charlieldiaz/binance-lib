const cancelAllOpenOrders = require('../../tradeActions/cancelAllOpenOrders');

test('Checks cancel All OpenOrders receives does not receive empty string', () => {
    expect(cancelAllOpenOrders(symbol)).toBe(3);
});






const util = require("../util")
const { fetchData } = require('./fetchData')

require("dotenv").config();
const secretKey = process.env.SECRET_KEY
const apiKey = process.env.API_KEY

async function cancelAllOpenOrders(symbol) {
    const endPoint = "v1/allOpenOrders";
    const params = util.sortParamsAlphabeticallyOmitEmptySignV({ symbol, timestamp: Date.now() });
    const signature = util.getSignature(params, secretKey);

    let url = `${endPoint}?${params}&signature=${signature}`;

    const requestOptions = {
        headers: { 'X-MBX-APIKEY': apiKey },
        url,
        method: "DELETE"
    };

    const rawNeqwOrderData = await fetchData(requestOptions, endPoint)
    return rawNeqwOrderData
}

module.exports = { cancelAllOpenOrders }
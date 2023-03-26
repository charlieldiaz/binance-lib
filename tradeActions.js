const axios = require('axios');

const TEST_NET_BASE_URL = "https://testnet.binancefuture.com/fapi/v1/"
async function fetchData(endPoint) {
    try {
        let response = await axios.get(TEST_NET_BASE_URL + endPoint)
        return response.data
    } catch (e) {
        console.log(e);
    }
}


async function getKlines(symbol, interval = '1') {
    const action = 'klines';
    const uniqueUrl = `${action}?symbol=${symbol}&interval=${interval}h`
    return await fetchData(uniqueUrl)
}

async function getOrderBook(symbol, limit = 10) {
    const action = 'depth';
    const uniqueUrl = `${action}?limit=${limit}&symbol=${symbol}`
    return await fetchData(uniqueUrl)
}

async function getTicker(symbol) {
    const action = 'ticker/price';
    const uniqueUrl = `${action}?symbol=${symbol}`
    return await fetchData(uniqueUrl)
}

async function getRecentTrades(symbol) {
    const action = 'trades';
    const uniqueUrl = `${action}?symbol=${symbol}`
    return await fetchData(uniqueUrl)
}

module.exports = { getOrderBook, getRecentTrades, getTicker, getKlines }

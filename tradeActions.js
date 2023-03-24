const axios = require('axios');

async function fetchData(uniqueUrl, actionName) {

    const baseUrl = 'https://testnet.binancefuture.com/fapi/v1/'
    await axios.get(baseUrl + uniqueUrl).then(res => {
        console.log(`======= ===== ===== ${actionName} ==== ==== ===== =====`);
        console.log(res.data);
    }).catch(err => {
        console.log(err);
    })
}


async function getKlines(symbol, interval = '1') {
    const action = 'klines';
    const actionName = 'K-lines'
    const uniqueUrl = `${action}?symbol=${symbol}&interval=${interval}h`
    fetchData(uniqueUrl, actionName)
}

async function getOrderBook(symbol, limit = 10) {
    const action = 'depth';
    const actionName = 'Orders'
    const uniqueUrl = `${action}?limit=${limit}&symbol=${symbol}`
    fetchData(uniqueUrl, actionName)
}

async function getTicker(symbol) {
    const action = 'ticker/price';
    const actionName = 'Price Ticker'
    const uniqueUrl = `${action}?symbol=${symbol}`
    fetchData(uniqueUrl, actionName)
}

async function getRecentTrades(symbol) {
    const action = 'trades';
    const actionName = 'Recent Trades'
    const uniqueUrl = `${action}?symbol=${symbol}`
    fetchData(uniqueUrl, actionName)
}

module.exports = { getOrderBook, getRecentTrades, getTicker, getKlines }
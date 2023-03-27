const axios = require('axios');
const tickerModel = require('./models/ticker.js');
let { parseAllTrades } = require("./models/trades");
let { parseAllKlines } = require("./models/klines");
let { parseAllOrderBook } = require("./models/orderBook");

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
    const rawKlinesData = await fetchData(uniqueUrl)
    return parseAllKlines(rawKlinesData)
}

async function getOrderBook(symbol, limit = 10) {
    const action = 'depth';
    const uniqueUrl = `${action}?limit=${limit}&symbol=${symbol}`
    const parsedOrderBookData = await fetchData(uniqueUrl)
    return parseAllOrderBook(parsedOrderBookData);
}

async function getTicker(symbol) {
    const action = 'ticker/price';
    const uniqueUrl = `${action}?symbol=${symbol}`
    const rawTickerData = await fetchData(uniqueUrl)
    const parsedtickerData = tickerModel.ticker(rawTickerData);
    return parsedtickerData;
}

async function getRecentTrades(symbol) {
    const action = 'trades';
    const uniqueUrl = `${action}?symbol=${symbol}`
    const rawTradesData = await fetchData(uniqueUrl)
    return parseAllTrades(rawTradesData)
}


module.exports = { getOrderBook, getRecentTrades, getTicker, getKlines }

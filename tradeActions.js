async function getTradeData(url, actionName) {
    const response = await fetch(url);
    const jsonResponse = await response.json();
    console.log(`======= ===== ===== ${actionName} ==== ==== ===== =====`);
    console.log(jsonResponse);
}

function getKlines(symbol, interval = '1') {
    const action = 'klines';
    const actionName = 'K-lines'
    const url = `https://testnet.binancefuture.com/fapi/v1/${action}?symbol=${symbol}&interval=${interval}h`
    getTradeData(url, actionName)
}

function getOrderBook(symbol, limit = 10) {
    const action = 'depth';
    const actionName = 'Orders'
    const url = `https://testnet.binancefuture.com/fapi/v1/${action}?limit=${limit}&symbol=${symbol}`
    getTradeData(url, actionName)
}

function getTicker(symbol) {
    const action = 'ticker/price';
    const actionName = 'Price Ticker'
    const url = `https://testnet.binancefuture.com/fapi/v1/${action}?symbol=${symbol}`
    getTradeData(url, actionName)
}

function getRecentTrades(symbol) {
    const action = 'trades';
    const actionName = 'Recent Trades'
    const url = `https://testnet.binancefuture.com/fapi/v1/${action}?symbol=${symbol}`
    getTradeData(url, actionName)
}

module.exports = { getOrderBook, getRecentTrades, getTicker, getKlines }
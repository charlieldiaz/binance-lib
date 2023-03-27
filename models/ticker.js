module.exports = {
    ticker: async function ticker(tickerData) {
        const parsedPrice = {
            'tickerPrice': parseFloat(tickerData.price),
            'time': new Date(tickerData.time),
            'symbol': tickerData.symbol
        }
        return parsedPrice;
    }
};
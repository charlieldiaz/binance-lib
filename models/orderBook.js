function parseOrderBookItem(orderBookRawData) {
    return {
        lastUpdateId: orderBookRawData.lastUpdateId,
        msgOutputTime: orderBookRawData.E,
        transactionTime: orderBookRawData.T,
        bids: orderBookRawData.bids.map(element => {
            return {
                price: parseFloat(element[0]),
                qty: parseFloat(element[1])
            }
        }),

        asks: orderBookRawData.asks.map(element => {
            return {
                price: parseFloat(element[0]),
                qty: parseFloat(element[1])
            }
        }),
    }
}

async function parseAllOrderBook(orderBookRawData) {
    let OrderBookitem = parseOrderBookItem(orderBookRawData)
    return OrderBookitem;

}

module.exports = { parseAllOrderBook };
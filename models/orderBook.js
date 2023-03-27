function parseOrderBookItem(orderBookRawData) {
    return {
        'lastUpdateId': orderBookRawData.lastUpdateId,
        'Msg output time': orderBookRawData.E,
        'Transaction time': orderBookRawData.T,
        'bids': orderBookRawData.bids.map(element => {
            return {
                'PRICE': parseFloat(element[0]),
                'QTY': parseFloat(element[1])
            }
        }),

        'asks': orderBookRawData.asks.map(element => {
            return {
                'PRICE': parseFloat(element[0]),
                'QTY': parseFloat(element[1])
            }
        }),
    }
}

async function parseAllOrderBook(orderBookRawData) {
    let OrderBookitem = parseOrderBookItem(orderBookRawData)
    return OrderBookitem;

}

module.exports = { parseAllOrderBook };
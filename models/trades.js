function parseTradesItem(tradesRawData) {
    return {
        id: `${tradesRawData.id}`,
        price: parseFloat(tradesRawData.price),
        quantity: parseFloat(tradesRawData.qty),
        quote: parseFloat(tradesRawData.quoteQty),
        time: new Date(tradesRawData.time),
        isBuyerMaker: tradesRawData.isBuyerMaker,
    }
}

async function parseAllTrades(tradesRawData) {
    let allTrades = [];
    tradesRawData.forEach(singleTrade => {
        let item = parseTradesItem(singleTrade)
        allTrades.push(item);
    })

    return allTrades;
}

module.exports = { parseAllTrades };
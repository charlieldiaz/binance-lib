function parseKlinesItem(klinesRawData) {
    return {
        openTime: klinesRawData[0],
        open: parseFloat(klinesRawData[1]),
        high: parseFloat(klinesRawData[2]),
        low: parseFloat(klinesRawData[3]),
        close: parseFloat(klinesRawData[4]),
        volume: parseFloat(klinesRawData[5]),
        closeTime: klinesRawData[6],
        quoteAssetVolume: parseFloat(klinesRawData[7]),
        numberOfTrades: klinesRawData[8],
        takerBuyBaseAssetVolume: parseFloat(klinesRawData[9]),
        takerBuyQuoteAssetVolume: parseFloat(klinesRawData[10]),
        ignore: parseFloat(klinesRawData[11]),

    }
}

function parseAllKlines(klinesRawData) {
    let allKlines = [];
    klinesRawData.forEach(singleKline => {
        let item = parseKlinesItem(singleKline)
        allKlines.push(item);
    })

    return allKlines;
}

module.exports = { parseAllKlines };
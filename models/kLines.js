function parseKlinesItem(klinesRawData) {
    return {
        'Open time': klinesRawData[0],
        'Open': parseFloat(klinesRawData[1]),
        'High': parseFloat(klinesRawData[2]),
        'Low': parseFloat(klinesRawData[3]),
        'Close': parseFloat(klinesRawData[4]),
        'Volume': parseFloat(klinesRawData[5]),
        'Close time': klinesRawData[6],
        'Quote asset volume': parseFloat(klinesRawData[7]),
        'Number of trades': klinesRawData[8],
        'Taker buy base asset volume': parseFloat(klinesRawData[9]),
        'Taker buy quote asset volume': parseFloat(klinesRawData[10]),
        'Ignore': parseFloat(klinesRawData[11]),

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
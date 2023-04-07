function parseKlinesItem(singleKline: any[]) {
  return {
    openTime: singleKline[0],
    open: parseFloat(singleKline[1]),
    high: parseFloat(singleKline[2]),
    low: parseFloat(singleKline[3]),
    close: parseFloat(singleKline[4]),
    volume: parseFloat(singleKline[5]),
    closeTime: singleKline[6],
    quoteAssetVolume: parseFloat(singleKline[7]),
    numberOfTrades: singleKline[8],
    takerBuyBaseAssetVolume: parseFloat(singleKline[9]),
    takerBuyQuoteAssetVolume: parseFloat(singleKline[10]),
    ignore: parseFloat(singleKline[11]),
  };
}

export interface Kline {
  openTime: Date;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  closeTime: Date;
  quoteAssetVolume: number;
  numberOfTrades: number;
  takerBuyBaseAssetVolume: number;
  takerBuyQuoteAssetVolume: number;
  ignore: number;
}

export function parseAllKlines(
  klinesRawData: (string | number)[][]
): Kline[] {
  let allKlines: Kline[] = [];
  klinesRawData.forEach((singleKline) => {
    let item = parseKlinesItem(singleKline);

    allKlines.push(item);
  });
  return allKlines;
}

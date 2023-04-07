interface RawTickerData {
  symbol: string;
  price: string;
  time: number;
}

export interface Ticker {
  symbol: string;
  price: number;
  time: Date;
}

export function parseTicker(tickerData: RawTickerData): Ticker {
  return {
    price: parseFloat(tickerData.price),
    time: new Date(tickerData.time),
    symbol: tickerData.symbol,
  };
}

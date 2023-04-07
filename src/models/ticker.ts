interface RawTickerData {
  symbol: string;
  price: string;
  time: number;
}

export interface TickerData {
  symbol: string;
  price: number;
  time: Date;
}

export function ticker(tickerData: RawTickerData): TickerData {
  const parsedPrice = {
    price: parseFloat(tickerData.price),
    time: new Date(tickerData.time),
    symbol: tickerData.symbol,
  };
  return parsedPrice;
}

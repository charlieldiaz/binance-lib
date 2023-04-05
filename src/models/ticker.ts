interface TickerData {
  symbol: string;
  price: string;
  time: number;
}
export default async function ticker(tickerData: TickerData) {
  const parsedPrice = {
    tickerPrice: parseFloat(tickerData.price),
    time: new Date(tickerData.time),
    symbol: tickerData.symbol,
  };
  return parsedPrice;
}

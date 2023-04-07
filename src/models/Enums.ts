export enum OrderType {
    LIMIT = "LIMIT",
    MARKET = "MARKET",
    STOP = "STOP",
    STOP_MARKET = "STOP_MARKET",
    TAKE_PROFIT = "TAKE_PROFIT",
    TAKE_PROFIT_MARKET = "TAKE_PROFIT_MARKET",
    TRAILING_STOP_MARKET = "TRAILING_STOP_MARKET",
}

export enum OrderSide {
    BUY = "BUY",
    SELL = "SELL",
}

export enum TimeInForce {
    GOOD_TILL_CANCEL = "GTC",
    IMMEDIATE_OR_CANCEL = "IOC",
    FILL_OR_KILL = "FOK",
    GOOD_TILL_CROSSING = "GTX"
}

export enum Interval {
    ONE_MINUTE = "1m",
    THREE_MINUTE = "3m",
    FIVE_MINUTE = "5m",
    FIFTEEN_MINUTE = "15m",
    THIRTY_MINUTE = "30m",
    ONE_HOUR = "1h",
    TWO_HOUR = "2h",
    FOUR_HOUR = "4h",
    SIX_HOUR = "6h",
    EIGHT_HOUR = "8h",
    TWELVE_HOUR = "12h",
    ONE_DAY = "1d",
    THREE_DAY = "3d",
    ONE_WEEK = "1w",
    ONE_MONTH = "1M",
}


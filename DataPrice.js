class DataPrice {
  constructor(buy, sell, id, pair, timestamp) {
    this.buy = buy;
    this.sell = sell;
    this.id = id;
    this.pair = pair;
    this.timestamp = timestamp;
  }
  mid() {
    return ((this.buy + this.sell) / 2).toFixed(1); //returns mid-point value of buy & sell
  }
  quote() {
    return this.pair.substring(3); //returns last 3 string which is quote currency
  }
}

module.exports = DataPrice;

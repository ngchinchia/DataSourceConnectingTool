const DataPrice = require('./DataPrice'); //import dataprice class

class DataSource {
  async getPrices() {
    return fetch("https://interview.switcheo.com/test.json") //fetch data from api
      .then((res) => res.json()) //returns a promise
      .then((data) => {
        const dataObj= data.data.prices; //access the data
        const priceData = dataObj.map((item) => new DataPrice(item.buy, item.sell, item.id, item.pair, item.timestamp)); //map each item as a new data price obj
        return priceData;
      })
      .catch((err) => {
        console.err("Error fetching data:", err.message); //catch any errors
      });
  }
}

module.exports = DataSource;
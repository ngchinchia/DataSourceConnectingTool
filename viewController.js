// fetch("https://interview.switcheo.com/test.json") //fetch data from api
//   .then(res => res.json()) //returns a promise
//   .then(data => {
//     console.log(data.data); //access the data
//   })
//   .catch(error => {
//     console.error("Error fetching data:", error.message); //catch any errors
//   });

const DataSource= require('./DataSource');

const ds = new DataSource(); //create an obj of DataSource to use getPrices method
ds.getPrices()
    .then(prices => {
        prices.map(price => {
            console.log(`Mid price for ${ price.pair } is ${ price.mid() } ${ price.quote() }.`);
        });
    }).catch(error => {
        console.err(error);
    });


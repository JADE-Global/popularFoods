const { Users, Restaurants, Reviews, Images, Dishes } = require('./database');
const faker = require('faker');
// const makeDollarAmount = () => {
//     return Number((Math.random() * 1000).toFixed(2))
// };

// const makeStockAmount = () => {
//     return Math.floor(Math.random() * 100)
// }

// const makeTickerSymbol = () => {
//     let ticker = '';
//     let size = Math.floor(Math.random() * (5-1) + 1);
//     let randNum = () => {
//         return Math.floor(Math.random() * (91-65) + 65)  
//     }; 

//     while (ticker.length < size) {
//         ticker += String.fromCharCode(randNum()) 
//     }

//     return ticker;
// }
const dataGenerators = {
    makeUser: function () {
        const newUser = {
            name: faker.name.findName(),
            friendsNumber: Math.floor(Math.random() * 101),
            reviewsnumber: Math.floor(Math.random() * 101)
        }
        return newUser;
    },
    // makeReview: function() {
    //     const newReview = {

    //     }
    // }
}
    // const seedQueries = {
    //     seedUser: function (userQuantity) {

    //     }

    // }

    // `https://source.unsplash.com/random?food`



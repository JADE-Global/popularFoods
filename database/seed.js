const { Users, Restaurants, Reviews, Images, Dishes } = require('./database');
const faker = require('faker');

const dataGenerators = {
    makeUserEntry: function () {
        const newUserEntry = {
            name: faker.name.findName(),
            friendsNumber: Math.floor(Math.random() * 101),
            reviewsNumber: Math.floor(Math.random() * 101)
        }
        return newUserEntry;
    },
    makeReviewEntry: function () {
        const newReviewEntry = {
            body: faker.lorem.paragraph(),
            stars: Math.floor((Math.random() * 5) + 1),
            userId: Math.floor((Math.random() * 50) + 1),
            dishId: Math.floor((Math.random() * 20) + 1)
        }
        return newReviewEntry;
    },
    makeDishEntry: function () {
        const newDishEntry = {
            name: faker.lorem.words(),
            price: Math.floor(Math.random() * 40 + 7) + Math.random(),
            restaurantId: Math.floor(Math.random() * 100 + 1)
        }
        return newDishEntry;
    },
    makeImageEntry: function () {
        const newImageEntry = {
            source: `https://source.unsplash.com/random?food`,
            caption: faker.lorem.sentence(),
            dishId: Math.floor((Math.random() * 20) + 1)
        }
        console.log(newImageEntry);
        return newImageEntry;
    },
    makeRestaurantEntry: function () {
        const newRestaurant = {
            name: faker.lorem.words()
        }
        return newRestaurant;
    }
}

const seedTable = function (entryNumber, makeFunction, table) {
    let unsproutedSeeds = [];
    for (let i = 0; i < entryNumber; i++) {
        let dataObject = makeFunction();
        unsproutedSeeds.push(
            table.create(dataObject)
        )
    }
    Promise.all(unsproutedSeeds)
        .then((data) => {
            console.log(`successfully updated table: ${table} with the following: ${data}`)
        })
        .catch((err) => {
            console.log(`Error while seeding data: ${err}`)
        })
}

seedTable(100, dataGenerators.makeRestaurantEntry, Restaurants);
seedTable(50, dataGenerators.makeUserEntry, Users);
seedTable(100, dataGenerators.makeReviewEntry, Reviews);
seedTable(20, dataGenerators.makeDishEntry, Dishes);
seedTable(50, dataGenerators.makeImageEntry, Images);







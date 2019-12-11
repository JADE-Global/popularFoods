const { Users, Restaurants, Reviews, Images, Dishes } = require('./database');
const faker = require('faker');
const dishPics = require('./dishPics');

const dataGenerators = {
    makeUserEntry: function () {
        let userNumber = Math.floor(Math.random() * 100);
        let userGender;
        if (Math.floor(Math.random() * 2) === 0) {
            userGender = 'women';
        } else {
            userGender = 'men';
        }
        const newUserEntry = {
            name: faker.name.findName(),
            avatarURL: `https://randomuser.me/api/portraits/thumb/men/${userNumber}.jpg`,
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
            dishId: Math.floor((Math.random() * 10) + 1)
        }
        return newReviewEntry;
    },
    makeDishEntry: function (name) {
        const newDishEntry = {
            name: name,
            price: Math.floor(Math.random() * 40 + 7) + Math.random(),
            restaurantId: Math.floor(Math.random() * 100 + 1),
            photoNumber: Math.floor(Math.random() * 5 + 2),
            reviewNumber: Math.floor(Math.random() * 50)
        }
        return newDishEntry;
    },
    makeImageEntry: function ({ src, caption, id }) {
        const newImageEntry = {
            source: src,
            // caption: faker.lorem.sentence(),
            // dishId: Math.floor((Math.random() * 10) + 1)
            caption: caption,
            dishId: id
        }
        return newImageEntry;
    },
    makeRestaurantEntry: function () {
        const newRestaurant = {
            name: faker.lorem.words()
        }
        return newRestaurant;
    }
}

const seedTable = function (entryNumber, makeFunction, table, data) {
    let promises = [];
    for (let i = 0; i < entryNumber; i++) {
        let dataObject;
        if (data) {
            dataObject = makeFunction(data[i]);

        } else {
            dataObject = makeFunction();
        }
        promises.push(
            table.create(dataObject)
        )
    }
    Promise.all(promises)
        .then((data) => {
            console.log(`successfully updated table: ${table} with the following: ${data}`)
        })
        .catch((err) => {
            console.log(`Error while seeding data: ${err}`)
        })
}

const makeImageData = function () {
    let result = [];
    for (let key in dishPics) {
        for (let i = 0; i < dishPics[key].length; i++) {
            result.push(dishPics[key][i]);
        }
    }
    return result;
}
const imageData = makeImageData();
seedTable(100, dataGenerators.makeRestaurantEntry, Restaurants);
seedTable(50, dataGenerators.makeUserEntry, Users);
seedTable(100, dataGenerators.makeReviewEntry, Reviews);
seedTable(Object.keys(dishPics).length, dataGenerators.makeDishEntry, Dishes, Object.keys(dishPics));
// seedTable(10, dataGenerators.makeDishEntry, Dishes);
seedTable(imageData.length, dataGenerators.makeImageEntry, Images, imageData);







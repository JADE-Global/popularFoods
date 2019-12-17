const { Users, Restaurants, Reviews, Images, Dishes, sequelize } = require('./database');
const faker = require('faker');
const { dishPics, dishNames } = require('./dishPics');

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
            name: `${faker.name.firstName()} ${faker.name.lastName()}`,
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

const seedTable = async function (entryNumber, makeFunction, table, data) {
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
    return Promise.all(promises)
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
const syncTables = async function () {
    return await sequelize.sync({ force: true });
}
syncTables().then(() => {
    seedTable(dishNames.length, dataGenerators.makeDishEntry, Dishes, dishNames)
        .then(async () => {
            return seedTable(50, dataGenerators.makeUserEntry, Users)
                .then(async () => {
                    return seedTable(100, dataGenerators.makeRestaurantEntry, Restaurants)
                        .then(async () => {
                            return seedTable(100, dataGenerators.makeReviewEntry, Reviews)
                                .then(async () => {
                                    return seedTable(imageData.length, dataGenerators.makeImageEntry, Images, imageData);

                                })

                        })

                })

        })
})


// seedTable(1, dataGenerators.makeReviewEntry, Reviews);







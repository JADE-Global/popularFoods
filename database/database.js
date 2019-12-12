const Sequelize = require('sequelize');
// const request = require('request');

const sequelize = new Sequelize('populardishes', 'root', '', {
    host: 'database',
    dialect: 'mysql',
    logging: false,
});

// return sequelize.query('DROP DATABASE IF EXISTS yelp').then(() => {

//     sequelize.query('CREATE DATABASE `yelp`;').then(data => {
sequelize.authenticate()
    .then(() => {
        console.log('connected to yelp db');
    })
    .catch((err) => {
        console.log('Unable to connect to the database:', err);
    });
const Users = sequelize.define('users', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: Sequelize.STRING,
    avatarURL: Sequelize.STRING,
    friendsNumber: Sequelize.INTEGER,
    reviewsNumber: Sequelize.INTEGER
});
const Restaurants = sequelize.define('restaurants', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: Sequelize.STRING,
});
const Reviews = sequelize.define('reviews', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    body: Sequelize.TEXT,
    stars: Sequelize.INTEGER,
    userId: Sequelize.INTEGER,
    dishId: Sequelize.INTEGER
})
const Dishes = sequelize.define('dishes', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: Sequelize.STRING,
    price: Sequelize.DECIMAL,
    restaurantId: Sequelize.INTEGER,
    photoNumber: Sequelize.INTEGER,
    reviewNumber: Sequelize.INTEGER
})
const Images = sequelize.define('images', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    source: Sequelize.STRING,
    caption: Sequelize.STRING,
    dishId: Sequelize.INTEGER
})
Dishes.hasMany(Images);
Images.belongsTo(Dishes);
Dishes.hasMany(Reviews);
Reviews.belongsTo(Dishes);
Users.hasMany(Reviews);
Reviews.belongsTo(Users);


Users.sync();
Restaurants.sync();
Reviews.sync();
Dishes.sync();
Images.sync();


module.exports = {
    Users,
    Restaurants,
    Reviews,
    Dishes,
    Images,
}
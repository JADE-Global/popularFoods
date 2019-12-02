const Sequelize = require('sequelize');
const request = require('request');

const sequelize = new Sequelize('yelp', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
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
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING,
    friendsNumber: Sequelize.INTEGER,
    reviewsNumber: Sequelize.INTEGER
});
const Restaurants = sequelize.define('restaurants', {
    name: Sequelize.STRING,
});
const Reviews = sequelize.define('reviews', {
    body: Sequelize.STRING,
    stars: Sequelize.INTEGER,
    userId: Sequelize.STRING,
    dishId: Sequelize.STRING
})
const Dishes = sequelize.define('dishes', {
    name: Sequelize.STRING,
    price: Sequelize.DECIMAL,
    restuarantId: Sequelize.STRING
})
const Images = sequelize.define('images', {
    source: Sequelize.STRING,
    caption: Sequelize.STRING,
    dishId: Sequelize.STRING
})
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
    Images
}
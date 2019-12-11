const { Users, Restaurants, Reviews, Images, Dishes } = require('../database/database');

module.exports = {
    dish: {
        getDishes: function (req, res) {
            Dishes.findAll({})
                .then(response => {
                    res.status(200).end(JSON.stringify(response));
                })
                .catch(err => {
                    console.log(err);
                    res.status(500).end();
                })
        }
    },
    images: {
        getFirst: function (req, res) {
            Images.findAll({
                where: {
                    dishId: req.params.dishId
                },
                attributes: ['source'],
                limit: 1
            })
                .then(response => {
                    console.log(response);
                    res.status(200).end(JSON.stringify(response));
                })
                .catch(err => {
                    console.log(err);
                    res.status(500).end();
                })
        },
        getAllForDish: function (req, res) {
            Images.findAll({
                where: {
                    dishId: req.params.dishId
                }
            })
                .then(response => {
                    console.log(response);
                    res.status(200).end(JSON.stringify(response));
                })
                .catch(err => {
                    console.log(err);
                    res.status(500).end();
                })
        }
    },
    reviews: {
        getOne: function (req, res) {
            Reviews.findAll({ limit: 1, include: [Users] })
                .then(response => {
                    console.log(response);
                    res.status(200).end();
                })
                .catch(err => {
                    console.log(err);
                    res.status(500).end();
                })
        }
    },
    users: {
        getTen: function (req, res) {
            Users.findAll({ limit: 10 })
                .then(response => {
                    console.log(response);
                    res.status(200).end();
                })
                .catch(err => {
                    console.log(err);
                    res.status(500).end();
                })
        }
    },
    test: {
        // getDishPics: function (req, res) {
        //     res.status(200).end(JSON.stringify({
        //         pictures: dishPics[req.params.dish]
        //     }))
        // },
        threeTestDishes: function (req, res) {
            res.status(200).end(JSON.stringify({
                dishes: [{
                    imageUrl: 'https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9',
                    price: 8.29,
                    name: 'Soup',
                    photoNumber: 5,
                    reviewNumber: 10
                }, {
                    imageUrl: 'https://images.unsplash.com/photo-1564929360162-73cd686db4a1?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9',
                    price: 12.44,
                    name: 'Salad',
                    photoNumber: 10,
                    reviewNumber: 15
                }, {
                    imageUrl: 'https://images.unsplash.com/photo-1546945838-86829f3468c2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9',
                    price: 27.59,
                    name: 'Chicken',
                    photoNumber: 15,
                    reviewNumber: 20
                },
                {
                    imageUrl: 'https://images.unsplash.com/photo-1547043184-599cd7e6acb9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9',
                    price: 15.59,
                    name: 'Dessert',
                    photoNumber: 1,
                    reviewNumber: 2
                }
                ]
            }))
        }
    }
}
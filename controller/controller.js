const { Users, Restaurants, Reviews, Images, Dishes } = require('../database/database');

module.exports = {
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
        threeTestDishes: function (req, res) {
            res.status(200).end(JSON.stringify({
                dishes: [{
                    imageUrl: 'https://source.unsplash.com/random',
                    price: 8.29,
                    name: 'Galvanize',
                    photoNumber: 5,
                    reviewNumber: 10
                }, {
                    imageUrl: 'https://source.unsplash.com/random',
                    price: 12.44,
                    name: 'Hack Reactor',
                    photoNumber: 10,
                    reviewNumber: 15
                }, {
                    imageUrl: 'https://source.unsplash.com/random',
                    price: 7.59,
                    name: 'cohort124',
                    photoNumber: 15,
                    reviewNumber: 20
                }
                ]
            }))
        }
    }
}
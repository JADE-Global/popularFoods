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
    }
}
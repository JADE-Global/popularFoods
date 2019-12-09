const { Users, Restaurants, Reviews, Images, Dishes } = require('../database/database');
const dishPics = {
    soup: [{
        src: "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
        caption: "This Soup looks pumpkinee"
    }, {
        src: "https://images.unsplash.com/photo-1543198453-ed52dc5cbfc0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
        caption: "Soupy"
    }, {
        src: "https://images.unsplash.com/photo-1504669221159-56caf7b07f57?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
        caption: "next level chicken noodle soup"
    }],
    salad: [{
        src: "https://images.unsplash.com/photo-1564929360162-73cd686db4a1?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
        caption: "Greens!"
    }, {
        src: "https://images.unsplash.com/photo-1536184071535-78906f7172c2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
        caption: "Salad makes all this junk food healthy!"
    }, {
        src: "https://images.unsplash.com/photo-1534889196564-a6799df68403?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
        caption: "What makes salad taste better? FRIES"
    }, {
        src: "https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
        caption: "KALE, freakin love the stuff"
    }, {
        src: "https://images.unsplash.com/photo-1520066391310-428f06ebd602?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
        caption: "Salad has become a relatively loose term..."
    }, {
        src: "https://images.unsplash.com/photo-1564844536311-de546a28c87d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
        caption: "Another Salad"
    }],
    chicken: [{
        src: 'https://images.unsplash.com/photo-1546945838-86829f3468c2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9',
        caption: "chicken! it's what's for dinner."
    }, {
        src: 'https://images.unsplash.com/photo-1569606470008-21ae92f19a21?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9',
        caption: "There's probably some chicken in there somewhere..."
    }, {
        src: 'https://images.unsplash.com/photo-1543206810-8f8cdd91d05e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9',
        caption: 'Farm to fork, the freshest chicken around'
    }, {
        src: 'https://images.unsplash.com/photo-1544274101-661c46addcf3?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9',
        caption: "What are YOU looking at?"
    }, {
        src: 'https://images.unsplash.com/photo-1562967916-eb82221dfb92?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9',
        caption: 'Fine dining'
    }],
    dessert: [{
        src: "https://images.unsplash.com/photo-1547043184-599cd7e6acb9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
        caption: "Chocolate and cherry flavor explosion"
    }, {
        src: "https://images.unsplash.com/photo-1559553156-2e97137af16f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
        caption: "cake!"
    }, {
        src: "https://images.unsplash.com/photo-1569863363653-451b38e6c4e1?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
        caption: "fancy icecream cone holder"
    }, {
        src: "https://images.unsplash.com/photo-1542124948-dc391252a940?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
        caption: "Our dessert looks terrible, lets fix it by putting it in mason jars!"
    },]

}
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
        getDishPics: function (req, res) {
            res.status(200).end(JSON.stringify({
                pictures: dishPics[req.params.dish]
            }))
        },
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
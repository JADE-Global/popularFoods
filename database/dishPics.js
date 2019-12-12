const dishPics = {
    soup: [{
        src: "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
        caption: "This Soup looks pumpkinee",
        id: 1
    }, {
        src: "https://images.unsplash.com/photo-1543198453-ed52dc5cbfc0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
        caption: "Soupy",
        id: 1
    }, {
        src: "https://images.unsplash.com/photo-1504669221159-56caf7b07f57?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
        caption: "next level chicken noodle soup",
        id: 1
    }],
    salad: [{
        src: "https://images.unsplash.com/photo-1564929360162-73cd686db4a1?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
        caption: "Greens!",
        id: 2
    }, {
        src: "https://images.unsplash.com/photo-1536184071535-78906f7172c2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
        caption: "Salad makes all this junk food healthy!",
        id: 2
    }, {
        src: "https://images.unsplash.com/photo-1534889196564-a6799df68403?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
        caption: "What makes salad taste better? FRIES",
        id: 2
    }, {
        src: "https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
        caption: "KALE, freakin love the stuff",
        id: 2
    }, {
        src: "https://images.unsplash.com/photo-1520066391310-428f06ebd602?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
        caption: "Salad has become a relatively loose term...",
        id: 2
    }, {
        src: "https://images.unsplash.com/photo-1564844536311-de546a28c87d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
        caption: "Another Salad",
    }],
    chicken: [{
        src: 'https://images.unsplash.com/photo-1546945838-86829f3468c2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9',
        caption: "chicken! it's what's for dinner.",
        id: 3
    }, {
        src: 'https://images.unsplash.com/photo-1569606470008-21ae92f19a21?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9',
        caption: "There's probably some chicken in there somewhere...",
        id: 3
    }, {
        src: 'https://images.unsplash.com/photo-1543206810-8f8cdd91d05e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9',
        caption: 'Farm to fork, the freshest chicken around',
        id: 3
    }, {
        src: 'https://images.unsplash.com/photo-1544274101-661c46addcf3?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9',
        caption: "What are YOU looking at?",
        id: 3
    }, {
        src: 'https://images.unsplash.com/photo-1562967916-eb82221dfb92?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9',
        caption: 'Fine dining',
        id: 3
    }],
    dessert: [{
        src: "https://images.unsplash.com/photo-1547043184-599cd7e6acb9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
        caption: "Chocolate and cherry flavor explosion",
        id: 4
    }, {
        src: "https://images.unsplash.com/photo-1559553156-2e97137af16f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
        caption: "cake!",
        id: 4
    }, {
        src: "https://images.unsplash.com/photo-1569863363653-451b38e6c4e1?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
        caption: "fancy icecream cone holder",
        id: 4
    }, {
        src: "https://images.unsplash.com/photo-1542124948-dc391252a940?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
        caption: "Our dessert looks terrible, lets fix it by putting it in mason jars!",
        id: 4
    },],
    chocolate: [{
        src: 'https://images.unsplash.com/photo-1561054732-c759a5f79863?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9',
        caption: "Yum!",
        id: 5
    }, {
        src: 'https://images.unsplash.com/photo-1551529674-48920e9b835b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9',
        caption: "healthy seed and chocolate cookies!",
        id: 5
    }, {
        src: 'https://images.unsplash.com/photo-1558612846-ec0c7ef23645?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9',
        caption: "Oreo elegance",
        id: 5
    },
    ],
    smoothie: [
        {
            src: 'https://images.unsplash.com/photo-1473115209096-e0375dd6b3b3?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9',
            caption: 'Coconut Smoothie was a delight!',
            id: 6
        }, {
            src: 'https://images.unsplash.com/photo-1571942694766-04e92c01e0e9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9',
            caption: 'a healthy start',
            id: 6
        }, {
            src: 'https://images.unsplash.com/photo-1488115996407-4a1e52e0481c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9',
            caption: 'Lightbulb smoothies',
            id: 6
        }, {
            src: 'https://images.unsplash.com/photo-1461107973086-9ca50bc9f429?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9',
            caption: 'strawberry',
            id: 6
        }
    ],
    steak: [
        {
            src: 'https://images.unsplash.com/photo-1529262365544-55d1707e64e6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9',
            caption: 'steak!',
            id: 7
        }, {
            src: 'https://images.unsplash.com/photo-1543900348-f03d06be7653?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9',
            caption: 'cooked rare',
            id: 7
        }
    ],
    spaghetti: [
        {
            src: 'https://images.unsplash.com/photo-1561560648-792dceba104d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9',
            caption: 'fantastic presentation',
            id: 8
        }, {
            src: 'https://images.unsplash.com/photo-1556761969-39ccd4b9447f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9',
            caption: 'spaghetti with shrimp',
            id: 8
        }, {
            src: 'https://images.unsplash.com/photo-1539586345401-51d5bfba7ac0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9',
            caption: 'seafood and spaghetti',
            id: 8
        }
    ],
    berries: [
        {
            src: 'https://images.unsplash.com/photo-1492684245835-840208d4b065?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9',
            caption: 'Mixed berries for dessert',
            id: 9
        },
        {
            src: 'https://images.unsplash.com/photo-1483153864486-7b9645237ee1?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9',
            caption: 'not sure if edible or just decor',
            id: 9
        }
    ],
    martini: [
        {
            src: 'https://images.unsplash.com/photo-1572363626275-6bcce0f80861?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9',
            caption: 'Shaken, not stirred.',
            id: 10
        }
    ]

}
const dishNames = ['soup', 'salad', 'chicken', 'dessert', 'chocolate', 'smoothie', 'steak', 'spaghetti', 'berries', 'martini']
module.exports = {
    dishPics,
    dishNames
}


var chance = require('chance')(123),

    _ = require('lodash'),

    Promise = require('bluebird');



var mongoose = require('mongoose')



var db = require('./server/db');

var User = mongoose.model('User');

var Product = mongoose.model('Product');

var Review = mongoose.model('Review');

var Order = mongoose.model('Order');



var seedUsers = function () {



    var users = [

        {

            email: 'testing@fsa.com',

            password: 'password',

            

        },

        {

            email: 'obama@gmail.com',

            password: 'potus'

        },

        {

            email: 'bill@bill.com',

            password: 'password'

        },

        {

            email: 'bob@bob.com',

            password: 'password'

        },

        {

            email: 'ian@ian.com',

            password: 'password',

            isAdmin: true

        },

    ];



    return User.createAsync(users);



};



var seedProducts = function() {

    var products = [

        {

            name: "product1",

            description: "Small batch food truck irony, squid keytar deep v leggings fixie Echo Park Tumblr roof party. Brooklyn organic Blue Bottle tattooed. Migas Helvetica small batch Brooklyn",

            category: ['summer', 'fall'],

            inventory: 33,

            price: 10000

        },

        {

            name: "product2",

            description: "Tattooed tilde mixtape vegan, High Life forage cred asymmetrical twee lomo messenger bag +1. Tilde irony viral try-hard, lumbersexual before they sold out ennui ugh forage heirloom hoodie gentrify Truffaut.",

            category: ['summer', 'winter'],

            inventory: 46,

            price: 10500

        },

        {

            name: "product3",

            description: "Synth next level messenger bag, whatever cronut McSweeney's quinoa kale chips paleo listicle readymade yr",

            category: ['winter', 'fall'],

            inventory: 332,

            price: 34000

        },

        {

            name: "product4",

            description: "uthentic tilde tofu single-origin coffee, listicle Truffaut viral.",

            category: ['spring', 'fall'],

            inventory: 42,

            price: 60040

        },

        {

            name: "product5",

            description: "Direct trade semiotics artisan occupy sriracha Vice fingerstache gastropub. ",

            category: ['summer', 'fall', 'winter'],

            inventory: 1,

            price: 13000

        }

    ];



    return Product.createAsync(products);

}



var seedReviews = function() {

    var reviews= [

        {

            body: "90's freegan keytar actually.",

            stars: 1,

            createdAt: Date.now(),

        },

        {

            body: "wee leggings deep v, synth you probably haven't heard of them lomo slow-carb Echo Park ",

            stars: 5,

            createdAt: Date.now(),

        },

        {

            body: "Brooklyn organic Blue Bottle tattooed.",

            stars: 4,

            createdAt: Date.now(),

        },

        {

            body: "McSweeney's pork belly keytar, 90's migas pour-over authentic crucifix viral blog yr semiotics. ",

            stars: 3,

            createdAt: Date.now(),

        },

        {

            body: "Banksy yr leggings street art. Letterpress pickled photo booth",

            stars: 2,

            createdAt: Date.now(),

        }

    ];

    return Review.createAsync(reviews);

}



var seedOrders = function() {

    var orders = [

        {

            status: 'cart'

        },

        {

            status: 'created'

        },

        {

            status: 'cart'

        },

        {

            status: 'cart'

        },

        {

            status: 'completed'

        },

        {

            status: 'created'

        },

        {

            status: 'cancelled'

        },

        {

            status: 'completed'

        }

    ];

    return Order.createAsync(orders);

}



// add authors to reviews (via user._id)

var authorReviews = function() {

    userPromise = User.find({});

    reviewPromise = Review.find({});

    return Promise.join(userPromise, reviewPromise, function(users, reviews) {

        // add a random user id to each review

        return Promise.each(reviews, function(review) {

            review.author = users[Math.floor(Math.random() * users.length)]._id;

            return review.save();

        })

    })

}

// add reviews to products

var reviewProducts = function() {

    reviewPromise = Review.find({});

    productPromise = Product.find({});

    return Promise.join(productPromise, reviewPromise, function(products, reviews) {

        // add review to each product

        return Promise.each(products, function(product, idx) {

            product.reviews.push(reviews[idx]);

            return product.save();

        })

    })

}



var productsAndUsersToOrders = function() {

    productPromise = Product.find({});

    orderPromise = Order.find({});

    userPromise = User.find({});

    return Promise.join(orderPromise, productPromise, userPromise, function(orders, products, users){

        // add a random product and the last product in the list (to have multiple items in the order)

        return Promise.each(orders, function(order) {

            order.items.push({

                product: products[Math.floor(Math.random() * (products.length - 1))]._id,

                quantity: Math.floor(Math.random() * 10)

            });

            order.items.push({

                product: products[products.length - 1]._id,

                quantity: Math.floor(Math.random() * 10)

            })

            // assign a user to the order

            order.user = users[Math.floor(Math.random() * users.length)]._id;

            return order.save();

        })

    })

}





mongoose.connection.on('open', function() {



    mongoose.connection.db.dropDatabase(function() {

        seedUsers().then(function(users) {

            // console.log(users)

        }).then(function() {

            return seedProducts()

        }).then(function(products) {

            // console.log(products)

            return seedReviews()

        }).then(function(reviews) {

            // console.log(reviews);

            return seedOrders()

        }).then(function(orders) {

            // console.log(orders);

            return authorReviews()

        }).then(function(reviews) {

            // console.log(reviews);

            return reviewProducts()

        }).then(function(products) {

            // console.log(products)

            return productsAndUsersToOrders();

        }).then(function(orders) {

            // console.log(orders);

            console.log("Finsihed insering data!")

            mongoose.connection.close();

        })





    });

});


var chance = require('chance')(123),
    _ = require('lodash'),
    Promise = require('bluebird');

var mongoose = require('mongoose')

var db = require('./server/db');
var User = mongoose.model('User');
var Product = mongoose.model('Product');
var Review = mongoose.model('Review');



function randPhoto () {
    var g = chance.pick(['men', 'women']);
    var n = chance.natural({
        min: 0,
        max: 96
    });
    return 'http://api.randomuser.me/portraits/thumb/' + g + '/' + n + '.jpg'
}

var numUsers = 15;
var numProducts = 20;

var emails = chance.unique(chance.email, numUsers);


function randReviews(){
    return new Review({
        body: chance.sentence(),
        stars: chance.integer({min: 1, max: 5})
    })
};


function randProduct(){
    return new Product({
        name: chance.word({syllables: 3}),
        description: chance.sentence(),
        category: chance.weighted(['protein', 'sports', 'nutrition', 'fitness'], [1, 2, 3, 4]),
        inventory: chance.integer({min: 0, max: 25}),
        dateIntroduced: chance.birthday(),
        unitOfSale: { amount: (chance.integer({min:1, max:10})), unit: chance.syllable()},
        picture: randPhoto(),
        price: chance.floating({min: 0, max: 100, fixed: 2}),
        reviews: _.times(5, randReviews)
        });
}


function randUser () {
    return new User({
        email: emails.pop(),
        password: chance.word(),
        salt: chance.word(),
        isAdmin: chance.weighted([true, false], [5, 95])
    });
}



//function generateAll () {
//    var users = _.times(numUsers, randUser);
//
//    var products = _.times(numProducts, function () {
//        return randProduct();
//    });
//
//}

var data = {
    User: _.times(numUsers, randUser),
    Product: _.times(numProducts, randProduct)
};

console.log(data);
//console.log(data);
mongoose.connection.on('open', function() {

    mongoose.connection.db.dropDatabase(function() {

        console.log("Dropped old data, now inserting data");
        Promise.map(Object.keys(data), function(modelName) {
            //return Promise.map(data[modelName], function(item){
                return mongoose.model(modelName).create(data[modelName]);
            //});
        }).then(function() {
            console.log("Finished inserting data");
        }, console.log).then(function() {
            mongoose.connection.close()
        });

    });
});

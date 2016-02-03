var Xray = require('x-ray');
var x = Xray();

x('http://starwars.wikia.com/wiki/The_Essential_Guide_to_Weapons_and_Technology','#mw-content-text li a')(function(err, results){
    console.log(results);
});

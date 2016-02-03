/**
 * Created by uzer-y on 10/28/15.
 */
var Promise = require('bluebird');
var mongoose = require('mongoose');
var db = require('./server/db');
var Product = mongoose.model('Product');


var seedProducts = function() {
    var products = [
        {
            "capacity": "500 shots",
            "weight": "1 kg",
            "number": 0,
            "source": "http://starwars.wikia.com/wiki/DH-17_blaster_pistol",
            "range": ["30 meters (optimum)", "120 meters (maximum)"],
            "price": 550,
            "name": "DH-17",
            "category": ["pistol", "one-hand"],
            "type": "Blaster pistol",
            "manufacturer": "BlasTech Industries",
            inventory: 1000,
            "image": './images/weapon_0.jpg',
            "description": "The DH-17 was an example of a typical blaster pistol, and was a standard-issue military sidearm in the Planetary Security Forces, Imperial Navy, the Alliance to Restore the Republic and the New Republic Defense Fleet."
        },
        {
            "capacity": "500 shots",
            "weight": "4.5 kg",
            "number": 1,
            "source": "http://starwars.wikia.com/wiki/E-11_blaster_rifle",
            "range": ["300 meters (optimal)", "450 meters (maximum)"],
            "price": 1000,
            "name": "E-11",
            "type": "Blaster rifle",
            "category": ["rifle", "two-hands"],
            "manufacturer": "BlasTech Industries",
            inventory: 1000,
            "image": './images/weapon_1.jpg',
            "description": "The BlasTech E-11 blaster rifle, also referred to as the E-11 BlasTech Standard Imperial Sidearm or the Stormtrooper Armament Blaster Rifle (BlasTech E-11)[2], was a blaster rifle used during the time of the Galactic Republic, and manufactured by BlasTech Industries during the Galactic Civil War. It was the standard blaster rifle of the Imperial stormtroopers. A powerful, light and compact weapon, the E-11 was used widely through the galaxy. "
        },
        {
            "capacity":"50 shots",
            "weight":"1.3 kg" ,
            "number": 2,
            "source": "http://starwars.wikia.com/wiki/DL-44_heavy_blaster_pistol",
            "range": ["50 meters (optimum)", "75 meters (maximum)"],
            "price": 750,
            "name": "DL-44",
            "type": "Heavy blaster pistol",
            "category": ["pistol", "one-hand"],
            "manufacturer": "BlasTech Industries",
            inventory: 1000,
            "image": './images/weapon_2.jpg',
            "description": "The DL-44 was a powerful, highly modifiable and accurate blaster pistol. It packed a heavy punch compared to other pistols without losing accuracy, which made it a prime choice among many groups and individuals, ranging from smugglers and bounty hunters to military and the Rebellion."
        },
        {
            "capacity": "100 shots",
            "weight": "1 kg",
            "number": 3,
            "source": "http://starwars.wikia.com/wiki/Defender_sporting_blaster",
            "range": ["30 meters (optimal)", "60 meters (maximum"],
            "price": 350,
            "name": "Defender",
            "type": "Sporting blaster",
            "category": ["pistol", "one-hand"],
            "manufacturer": "Drearian Defense Conglomerate",
            inventory: 1000,
            "image": './images/weapon_3.jpg',
            "description": "The Defender sporting blaster pistol was made by the Drearian Defense Conglomerate. The DDC Defender was a low-powered weapon, meant for civilian self-defense and small-game hunting. It was also a popular weapon for use in honor duels among the nobility."
        },
        {
            "capacity": "30 shots",
            "weight": "6 kg",
            "number": 4,
            "source": "http://starwars.wikia.com/wiki/Light_repeating_blaster",
            "range": ["150 meters (optimal)", "300 meters (maximum)"],
            "price":  2250,
            "name": "Light RB",
            "type": "Blaster rifle",
            "category": ["rifle", "two-hands"],
            "manufacturer": "Drearian Defense Conglomerate",
            inventory: 1000,
            "image": './images/weapon_4.jpg',
            "description": "The light repeating blaster was a lighter version of a regular repeating blaster. This weapon was legally restricted to military use in most instances."
        },
        {
            "capacity": "30 shots",
            "weight": "4.5 kg",
            "number": 5,
            "source": "http://starwars.wikia.com/wiki/T-21_light_repeating_blaster",
            "range": ["150 meters (optimum)", "300 meters (maximum)"],
            "price": 2000,
            "name": "T-21",
            "type": "Light repeating blaster",
            "category": ["pistol", "one-hand"],
            "manufacturer": "BlasTech Industries",
            inventory: 1000,
            "image": './images/weapon_5.jpg',
            "description": "The T-21 was the heaviest and one of the most powerful standard-issue weapons that could be carried by a single soldier. The sheer power of its bolts could cut through personal armor and break down personal energy shields, even penetrate the armored plating on many light combat vehicles. It could be wielded two-handed and fired on the move, however, for superior accuracy a light extendable tripod, usually carried in the soldier's belt, was included for stationary firing"
        },
        {
            "capacity": "6 shots",
            "weight": "8 kg",
            "number": 7,
            "source": "http://starwars.wikia.com/wiki/Bowcaster",
            "range": ["30 meters (optimal)", "50 meters (maximum)"],
            "price": 1500,
            "name": "Bowcaster",
            "type": "Exotic weapon",
            "category": ["bow", "two-hands"],
            "manufacturer": "Wookiees",
            "image": './images/weapon_7.jpg',
            "description": "The bowcaster (sometimes called the Wookiee Crossbow) was a Wookiee projectile weapon that fired a metal quarrel enveloped in energy. Some bowcasters were modified to fire pure energy. Some variants had a capacity of twenty-four shots. "
        },
        {
            "capacity": "10 shots",
            "weight": "3 kg",
            "number": 10,
            "source": "http://starwars.wikia.com/wiki/DX-2_disruptor_pistol",
            "range": ["5 meters (optimal)", "5 meters (maximum)"],
            "price": 3000,
            "name": "DX-2",
            "type": "Disruptor pistol",
            "category": ["pistol", "one-hand"],
            "manufacturer": "Tenloss Criminal Syndicate",
            inventory: 1000,
            "image": './images/weapon_10.png',
            "description": "Like most disruptors, the DX-2 was highly illegal on most worlds. It was a smaller version of the DXR-6 disruptor rifle and similar to it in many respects. The DX-2 was able to disintegrate targets at the molecular level, which was useful for those who did not want to leave bodies behind as evidence. Because of the massive energy involved in creating a disruptor beam, the DX-2 needed a longer than normal cooldown time before it could fire again"
        },
        {
            "capacity": "10 shots",
            "weight": "6 kg",
            "number": 11,
            "source": "http://starwars.wikia.com/wiki/DXR-6_disruptor_rifle",
            "range": ["10 meters (optimal)", "20 meters (maximum)"],
            "price": 3500,
            "name": "DXR-6",
            "type": "Disruptor rifle",
            "category": ["rifle", "two-hands"],
            "manufacturer": "Tenloss Syndicate",
            inventory: 1000,
            "image": './images/weapon_11.jpg',
            "description": "The DXR-6 was a larger version of the DX-2 disruptor pistol. As was the case with all disruptor weapons, it was outlawed by all civilized worlds. It could disintegrate matter at the molecular level and rip apart living material with ease and speed. Even a glancing blow could produce grievous injuries. This weapon usually resulted in a one-hit kill and often the only sign that there was a target was a smoking pile of ash where the enemy used to be."
        },
        {
            "capacity": "40 shots",
            "weight": "1 kg",
            "number": 12,
            "source": "http://starwars.wikia.com/wiki/Sd-77_sonic_pistol",
            "range": ["10 meters (optimal)", "20 meters (maximum)"],
            "price": 1000,
            "name": "Sd-77",
            "type": "Sonic pistol",
            "category": ["pistol", "one-hand"],
            "manufacturer": "Pacnorval Defense Systems, Limited",
            inventory: 1000,
            "image": './images/weapon_12.png',
            "description": "The Sd-77 sonic pistol was a range weapon produced by Pacnorval Defense Systems, Limited. The sonic pistol fired a wide blast of high-intensity sound waves which could shatter solid objects or stun a sentient."
        },
        {
            "capacity": "20 shots",
            "weight": "4 kg",
            "number": 13,
            "source": "http://starwars.wikia.com/wiki/Sg-82_sonic_rifle",
            "range": ["15 meters (optimum)", "35 meters (maximum)"],
            "price": 2000,
            "name": "Sg-82",
            "type": "Sonic rifle",
            "category": ["rifle", "two-hands"],
            "manufacturer": "Pacnorval Defense Systems, Limited",
            inventory: 1000,
            "image": './images/weapon_13.jpg',
            "description": "The Sg-82 was a short-range weapon—with a maximum range of only thirty-five meters—though with an optimum range of fifteen meters, it was ideal for crowd control. The Sg-82's stun setting ensured targets were incapacitated without suffering injury. Simple thumb controls were used to adjust blast frequency, intensity and vector. The power pack provided energy for both the sonic blaster and the stun club built in to the weapon's handle."
        }
    ];
    return Product.createAsync(products);
}

mongoose.connection.on('open', function() {

    mongoose.connection.db.dropCollection('products', function() {
        seedProducts().then(function(products) {
            console.log("Finsihed insering products!");
            mongoose.connection.close();
        })
    })
});

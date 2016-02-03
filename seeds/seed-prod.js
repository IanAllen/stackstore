var Promise = require('bluebird');
var mongoose = require('mongoose')
var db = require('./server/db');
var Product = mongoose.model('Product');


var seedProducts = function() {
  var products = [
    {
    	// url: "http://www.starwars.com/databank/general-hux">,
    	image: "http://img.lum.dolimg.com/v1/images/ep7_ia_22591_r_8396f2d2.jpeg?region=0%2C217%2C1040%2C587",
    	name: "General Hux",
    	description: "A young, ruthless officer in the First Order, General Hux has complete confidence in his troops, training methods and weapons.",
    	inventory: 1000,
    	price: (Math.random() * (10000 - 3)).toFixed(2) + 3
    },
    {
    	// url: "http://www.starwars.com/databank/finn">,
    	image: "http://img.lum.dolimg.com/v1/images/x551_tea0010_denoised3_16int_8a29e084.jpeg?region=268%2C0%2C1165%2C654&amp;width=480",
    	name: "Finn",
    	description: "A trained warrior desperate to escape his past, Finn is plunged into adventure as his conscience drives him down a heroic, but dangerous, path.",
    	inventory: 1000,
    	price: (Math.random() * (10000 - 3)).toFixed(2) + 3
    },
    {
    	// url: "http://www.starwars.com/databank/kylo-ren-s-command-shuttle">,
    	image: "http://img.lum.dolimg.com/v1/images/pj0010_a0ab2179.jpeg?region=199%2C0%2C1163%2C654&amp;width=480",
    	name: "Kylo Ren's Command Shuttle",
    	description: "With enormous stabilizers that create an imposing profile when in flight or when landed, Kylo Ren’s command shuttle is an impressive sight.",
    	inventory: 1000,
    	price: (Math.random() * (10000 - 3)).toFixed(2) + 3
    },
    {
    	// url: "http://www.starwars.com/databank/bb-8">,
    	image: "http://img.lum.dolimg.com/v1/images/ep7_ia_162323_j_077412a0.jpeg?region=363%2C0%2C1165%2C654&amp;width=480",
    	name: "BB-8",
    	description: "BB-8 is the spherical, loyal Astromech Droid of the Resistance pilot Poe Dameron.",
    	inventory: 1000,
    	price: (Math.random() * (10000 - 3)).toFixed(2) + 3
    },
    {
    	// url: "http://www.starwars.com/databank/2-1b-droid">,
    	image: "http://img.lum.dolimg.com/v1/images/2-1b-droid-main-image_546a90ad.jpeg?region=256%2C0%2C1048%2C1048&amp;width=480",
    	name: "2-1B Droid",
    	description: "2-1B droids were medical wonders, programmed to diagnose and treat injuries and diseases that afflicted millions of species in the galaxy. 2-1B droids had modular limbs that allowed them to use a range of surgical toolsand other medical instruments based on their patients' needs.",
    	inventory: 1000,
    	price: (Math.random() * (10000 - 3)).toFixed(2) + 3
    },
    {
    	// url: "http://www.starwars.com/databank/4-lom">,
    	image: "http://img.lum.dolimg.com/v1/images/curve_4lom_a7640432.jpeg?region=0%2C12%2C230%2C230",
    	name: "4-LOM",
    	description: "A rusty droid with insectile features, 4-LOM was originally a protocol droid, but logic glitches allowed him to escape his programming and become a bounty hunter. That proved a perfect occupation for the cold, calculatingmechanical.",
    	inventory: 1000,
    	price: (Math.random() * (10000 - 3)).toFixed(2) + 3
    },
    {
    	// url: "http://www.starwars.com/databank/79-s">,
    	image: "http://img.lum.dolimg.com/v1/images/image_7f322dba.jpeg?region=0%2C62%2C753%2C754&amp;width=480",
    	name: "79's",
    	description: "79’s was a bar located on Coruscant, particularly popular with clone troopers. While off duty, Republic soldiers would gather at the cantina to relax, drink, and blow off steam, often making rowdy toasts. When clonetrooper Fives uncovered the conspiracy of Order 66, he went to 79’s in search of fellow soldier Kix, knowing that’s where his friend would most likely be.",
    	inventory: 1000,
    	price: (Math.random() * (10000 - 3)).toFixed(2) + 3
    },
    {
    	// url: "http://www.starwars.com/databank/8d8">,
    	image: "http://img.lum.dolimg.com/v1/images/8d8-main-image_4643541d.jpeg?region=217%2C0%2C661%2C663&amp;width=480",
    	name: "8D8",
    	description: "A lanky smelter droid, 8D8 assisted EV-9D9 in terrorizing Jabba the Hutt's droid pool. Normally limited to simple tasks in the harsh confines of ore-extraction facilities, 8D8 had been reprogrammed for sadism.",
    	inventory: 1000,
    	price: (Math.random() * (10000 - 3)).toFixed(2) + 3
    },
    {
    	// url: "http://www.starwars.com/databank/a-wing-fighter">,
    	image: "http://img.lum.dolimg.com/v1/images/screen_shot_2015-05-26_at_5_16a39e17.png?region=107%2C0%2C598%2C598&amp;width=480",
    	name: "A-wing Fighter",
    	description: "With its sleek arrowhead shape, streamlined cockpit, and massive twin engines, the A-wing starfighter suggests raw speed even when parked within Alliance hangar bays. Faster than even the TIE interceptor, the A-wingis well suited for lightning strikes. It sports a pair of pivoting laser cannons on each wingtip. The starfighters of Green Squadron, which flew in the Battle of Endor, were made up of A-wing starfighters.",
    	inventory: 1000,
    	price: (Math.random() * (10000 - 3)).toFixed(2) + 3
    },
    {
    	// url: "http://www.starwars.com/databank/aat-battle-tank">,
    	image: "http://img.lum.dolimg.com/v1/images/databank_aatbattletank_01_169_9de46aea.jpeg?region=260%2C0%2C877%2C878&amp;width=480",
    	name: "AAT Battle Tank",
    	description: "The marriage of repulsorlift technology and heavy armor has resulted in formidable floating tanks known as AATs. These assault tanks form the frontline of Trade Federation armored infantry divisions, as well as Separatistforces during the Clone Wars. A crew of battle droids drives the battle tank and operates the array of laser and projectile weaponry carried by the vehicle.",
    	inventory: 1000,
    	price: (Math.random() * (10000 - 3)).toFixed(2) + 3
    },
    {
    	// url: "http://www.starwars.com/databank/aayla-secura">,
    	image: "http://img.lum.dolimg.com/v1/images/databank_aaylasecura_01_169_39a65af2.jpeg?region=636%2C0%2C878%2C878&amp;width=480",
    	name: "Aayla Secura",
    	description: "With an athletic build, an exotic beauty, and blue skin, Aayla Secura stood out among the many faces of the Jedi ranks. A cunning warrior and Jedi Knight during the rise of the Clone Wars, Aayla fought alongside CloneCommander Bly on many exotic battlefields. Having mastered the emotional detachment necessary in the Jedi Order, she always tried to pass on what she had learned to others. Aayla was killed, along with many otherJedi Generals, when her troops turned on her in reaction to Supreme Chancellor Palpatine’s broadcast of Order 66.",
    	inventory: 1000,
    	price: (Math.random() * (10000 - 3)).toFixed(2) + 3
    },
    {
    	// url: "http://www.starwars.com/databank/abafar">,
    	image: "http://img.lum.dolimg.com/v1/images/databank_abafar_01_169_475b5d42.jpeg?region=683%2C0%2C877%2C878&amp;width=480",
    	name: "Abafar",
    	description: "A remote world in the Outer Rim Territories, Abafar is scarcely populated. It is dominated by vast stretches of featureless desert under oppressive orange skies. The strange regolith that covers the surface twists lightin such a way as to obscure shadows and leave no tracks. Particulates in the atmosphere cause the sunlight to diffuse into a uniform orange glow, so it is nearly impossible to tell direction or time of day. The hugestretches of featureless expanse are known as The Void. Pons Ora is one of the few settlements on Abafar, and it is the site of a Rhydonium mining installation operated by the Separatists during the Clone Wars.",
    	inventory: 1000,
    	price: (Math.random() * (10000 - 3)).toFixed(2) + 3
    },
    {
    	// url: "http://www.starwars.com/databank/acklay">,
    	image: "http://img.lum.dolimg.com/v1/images/databank_acklay_01_169_e544124f.jpeg?region=341%2C0%2C878%2C878&amp;width=480",
    	name: "Acklay",
    	description: "A surprisingly agile fury of sharp claws and pointed fangs, the vicious acklay was one of the three arena creatures unleashed in the Geonosian execution arena, dispatched to kill Anakin Skywalker, Padme Amidala, andObi-Wan Kenobi. The Geonosian picadors steered the acklay toward Obi-Wan, who was able to outmaneuver the beast. A clumsy yet powerful strike from one of its claws sheered the chains that bound Kenobi. The beast continuedto pursue the Jedi Knight, rending large holes in the hard-packed sand with its vicious stabs. It even shrugged off a pike attack, chomping through the offending polearm with bestial rage.",
    	inventory: 1000,
    	price: (Math.random() * (10000 - 3)).toFixed(2) + 3
    },
    {
    	// url: "http://www.starwars.com/databank/adi-gallia">,
    	image: "http://img.lum.dolimg.com/v1/images/databank_adigallia_169_8b798f27.jpeg?region=265%2C0%2C878%2C878&amp;width=480",
    	name: "Adi Gallia",
    	description: "Jedi Master Adi Gallia was a member of the Order's High Council during the Clone Wars. She and the other members of that ruling body would convene in a temple high above the Coruscant landscape, deciding important mattersof the Jedi. Stern and focused, she would remark upon the more outrageous tactics carried out by Anakin Skywalker or Obi-Wan Kenobi in the course of the war, but would rarely condemn their effective actions. Thoughnot as brash as Anakin, Adi Gallia was known to be an aggressive warrior who had no problem bringing the fight to the enemy.",
    	inventory: 1000,
    	price: (Math.random() * (10000 - 3)).toFixed(2) + 3
    },
    {
    	// url: "http://www.starwars.com/databank/admiral-ackbar">,
    	image: "http://img.lum.dolimg.com/v1/images/databank_ackbar_01_169_55137220.jpeg?region=209%2C0%2C877%2C878&amp;width=480",
    	name: "Admiral Ackbar",
    	description: "A veteran commander, Ackbar led the defense of his oceanic home world, Mon Cala, during the Clone Wars, and the Rebel cruiser assault of the Battle of Endor during the war against the Empire. A Mon Calamari, Ackbarand his people manned the distinctive warships supplied to the Rebellion by that aquatic culture. Beyond the qualifications of his great skills and sterling character, Ackbar was a symbol to the rest of the galaxythat the Alliance is fighting for everyone, no matter what their background or origin. The Empire, in contrast, routinely subjugated non-humans.",
    	inventory: 1000,
    	price: (Math.random() * (10000 - 3)).toFixed(2) + 3
    },
    {
    	// url: "http://www.starwars.com/databank/admiral-coburn">,
    	image: "http://img.lum.dolimg.com/v1/images/databank_admiralcoburn_01_169_8db29cff.jpeg?region=341%2C0%2C878%2C878&amp;width=480",
    	name: "Admiral Coburn",
    	description: "With a stern face, steely glare and unmistakable command presence, Admiral Coburn served at the side of General Plo Koon during the Clone Wars. The taciturn fleet officer measured his words precisely, offering clearcommands in a clipped accent. Coburn's rigid military discipline served him well in executing some of the more daring missions under Jedi leadership. He commanded a four-cruiser task force into the thick of a Separatistfleet cordon over Lola Sayu to facilitate the rescue of a strike team that invaded the Citadel installation. Coburn also led a Jedi light cruiser in extracting prisoners from the Zygerrian slave processing facilityon Kadavo, steering the vessel dangerously close to the facility.",
    	inventory: 1000,
    	price: (Math.random() * (10000 - 3)).toFixed(2) + 3
    },
    {
    	// url: "http://www.starwars.com/databank/admiral-kassius-konstantine">,
    	image: "http://img.lum.dolimg.com/v1/images/image_55c96977.jpeg?region=273%2C0%2C901%2C901&amp;width=480",
    	name: "Admiral Kassius Konstantine",
    	description: "Admiral Kassius Konstantine was a leading officer on an Imperial Star Destroyer. Konstantine, however, ultimately answered to the Inquisitor, and took his ship wherever the Jedi hunter ordered him to.",
    	inventory: 1000,
    	price: (Math.random() * (10000 - 3)).toFixed(2) + 3
    },
    {
    	// url: "http://www.starwars.com/databank/admiral-kilian">,
    	image: "http://img.lum.dolimg.com/v1/images/databank_admiralkillian_01_169_398fb91c.jpeg?region=590%2C0%2C878%2C878&amp;width=480",
    	name: "Admiral Kilian",
    	description: "A by-the-manuals Republic officer, Admiral Kilian runs a tight ship. Nonetheless, a saboteur was able to slip into the clone cadet ranks during a training tour over Vanqor, and cripple the Jedi cruiser Endurance. Kilian,following naval tradition, refused to abandon ship. He became a hostage of notorious bounty hunters seeking revenge against the Jedi Order.",
    	inventory: 1000,
    	price: (Math.random() * (10000 - 3)).toFixed(2) + 3
    },
    {
    	// url: "http://www.starwars.com/databank/admiral-motti">,
    	image: "http://img.lum.dolimg.com/v1/images/databank_admiralmotti_01_169_f01d2570.jpeg?region=417%2C0%2C878%2C878&amp;width=480",
    	name: "Admiral Motti",
    	description: "Admiral Motti was a young, ambitious Imperial officer who extolled the Death Star as the ultimate power in the universe, and burned to use the battle station against the Rebellion and any who dared to challenge Imperialpower. An ally of Grand Moff Tarkin's, Motti loved technology above all else, particularly when it was used to create devastating superweapons. He died when the Death Star was destroyed.",
    	inventory: 1000,
    	price: (Math.random() * (10000 - 3)).toFixed(2) + 3
    },
    {
    	// url: "http://www.starwars.com/databank/admiral-ozzel">,
    	image: "http://img.lum.dolimg.com/v1/images/e5d_ia_1189_6c16bed1.jpeg?region=144%2C0%2C808%2C809&amp;width=480",
    	name: "Admiral Ozzel",
    	description: "Admiral Ozzel commanded the Super Star Destroyer Executor, Darth Vader's mighty flagship and the linchpin of the squadron searching the galaxy for the Alliance's secret base. Ozzel led the initial attack on Hoth, buthis choice of tactics infuriated Vader, leading to a sudden and permanent demotion.",
    	inventory: 1000,
    	price: (Math.random() * (10000 - 3)).toFixed(2) + 3
    },
    {
    	// url: "http://www.starwars.com/databank/admiral-piett">,
    	image: "http://img.lum.dolimg.com/v1/images/databank_admiralpiett_01_169_18014135.jpeg?region=423%2C0%2C877%2C878&amp;width=480",
    	name: "Admiral Piett",
    	description: "An ambitious Imperial officer, Piett rose through the ranks to captain and was assigned to the Super Star Destroyer Executor, Darth Vader's flagship. There, he chafed at having to serve under the foolish, vaingloriousAdmiral Ozzel. When Vader strangled Ozzel, Piett was granted a battlefield promotion to admiral -- and given a grisly warning of the penalty for failure. Miraculously, he survived his time as Vader's underling, butdied when a Rebel starfighter destroyed the Executor's command bridge.",
    	inventory: 1000,
    	price: (Math.random() * (10000 - 3)).toFixed(2) + 3
    },
    {
    	// url: "http://www.starwars.com/databank/admiral-trench">,
    	image: "http://img.lum.dolimg.com/v1/images/databank_admiraltrench_01_169_b05dd531.jpeg?region=358%2C0%2C877%2C878&amp;width=480",
    	name: "Admiral Trench",
    	description: "A Separatist admiral known for his cunning and ruthlessness, Trench commanded the Separatist blockade of Christophsis, where Senator Bail Organa and his relief effort were pinned down and in danger of capture. AnakinSkywalker sought to break Trench's blockade by attacking his flagship with a cloaked stealth ship created by Republic engineers.",
    	inventory: 1000,
    	price: (Math.random() * (10000 - 3)).toFixed(2) + 3
    },
    {
    	// url: "http://www.starwars.com/databank/bacta-tank">,
    	image: "http://img.lum.dolimg.com/v1/images/bacta-tank-main-image_913e9351.jpeg?region=277%2C0%2C1031%2C1031&amp;width=480",
    	name: "Bacta Tank",
    	description: "Bacta tanks were cylindrical vessels filled with a liquid healing agent and used to treat seriously injured patients. To promote healing, patients were completely submerged and used breathing masks while recuperating.Clone troopers were treated in bacta at facilities such as the Kaliida Shoals Medical Center; after he was injured by a wampa, Luke Skywalker recovered in a bacta tank at Hoth’s Echo Base.",
    	inventory: 1000,
    	price: (Math.random() * (10000 - 3)).toFixed(2) + 3
    },
    {
    	// url: "http://www.starwars.com/databank/blaster-pistol">,
    	image: "http://img.lum.dolimg.com/v1/images/image_75ccd60e.jpeg?region=395%2C0%2C878%2C878&amp;width=480",
    	name: "Blaster Pistol",
    	description: "The standard ranged weapon of both military personnel and civilians in the galaxy, the blaster pistol fires cohesive bursts of light-based energy called bolts. Appearing in a variety of shapes and sizes and sometimesaugmented for other functions, including acension guns that fire grappling hooks, blaster pistols deliver a wide range of damage capability. Many blaster pistols have stun settings that incapacitate a target, ratherthan inflicting physical damage. While blasters do deliver a searing concussive blast, they can be foiled by magnetic seals and deflector shields.",
    	inventory: 1000,
    	price: (Math.random() * (10000 - 3)).toFixed(2) + 3
    },
    {
    	// url: "http://www.starwars.com/databank/blaster-rifle">,
    	image: "http://img.lum.dolimg.com/v1/images/image_2702e35a.jpeg?region=387%2C0%2C878%2C878&amp;width=480",
    	name: "Blaster Rifle",
    	description: "Larger, more powerful blasters, often used by Stormtroopers, clones, or bountry hunters. Other forms included sniper blaster rifles.",
    	inventory: 1000,
    	price: (Math.random() * (10000 - 3)).toFixed(2) + 3
    },
    {
    	// url: "http://www.starwars.com/databank/booma">,
    	image: "http://img.lum.dolimg.com/v1/images/databank_booma_01_169-EDITED_6d063252.jpeg?region=406%2C0%2C878%2C878&amp;width=480",
    	name: "Booma",
    	description: "Round blue projectile weapons used by Gungans, ranging from palm-size for easy throwing to larger sizes that could be catapulted.",
    	inventory: 1000,
    	price: (Math.random() * (10000 - 3)).toFixed(2) + 3
    },
    {
    	// url: "http://www.starwars.com/databank/bowcaster">,
    	image: "http://img.lum.dolimg.com/v1/images/databank_bowcaster_01_169_475a4a3b.jpeg?region=246%2C0%2C878%2C878&amp;width=480",
    	name: "Bowcaster",
    	description: "A traditional Wookiee weapon, bowcasters are hand-crafted on Kashyyyk according to ancient methods. Bowcasters are more powerful and accurate than blasters, firing a metal quarrel encased in plasma energy. Like manyWookiee creations, the bowcaster combines traditional craftsmanship with galactic technology. Noted bowcaster wielders include Chewbacca and the bounty hunter Embo.",
    	inventory: 1000,
    	price: (Math.random() * (10000 - 3)).toFixed(2) + 3
    },
    {
    	// url: "http://www.starwars.com/databank/carbon-freezing">,
    	image: "http://img.lum.dolimg.com/v1/images/carbon-freezing-main-image_92b3d8cd.jpeg?region=237%2C0%2C1022%2C1025&amp;width=480",
    	name: "Carbon-freezing",
    	description: "Carbon-freezing is an industrial process that encases highly pressurized gases inside solidified carbonite. In Cloud City, Darth Vader decided to freeze Luke Skywalker in carbonite for transport to the Emperor. (AsAnakin Skywalker, he’d undergone the process himself to evade Separatist life detectors.) Before setting his trap for Luke, Vader tested the process on Han Solo. The smuggler survived, and was later freed by PrincessLeia in Jabba’s palace, though hibernation sickness left him temporarily blind.",
    	inventory: 1000,
    	price: (Math.random() * (10000 - 3)).toFixed(2) + 3
    },
    {
    	// url: "http://www.starwars.com/databank/comlink">,
    	image: "http://img.lum.dolimg.com/v1/images/image_882c5d68.jpeg?region=894%2C55%2C714%2C713&amp;width=480",
    	name: "Comlink",
    	description: "Comlinks are standard handheld communication devices, fit with microphones and receivers, and are prevalent throughout the galaxy. The Empire used the standard C1 personal comlink, manufactured by the SoroSuub Corporation.For private transmissions, comlinks can be tuned with encryption algorithms to work only with each other.",
    	inventory: 1000,
    	price: (Math.random() * (10000 - 3)).toFixed(2) + 3
    },
    {
    	// url: "http://www.starwars.com/databank/darksaber">,
    	image: "http://img.lum.dolimg.com/v1/images/databank_darksaber_01_169_0bab10aa.jpeg?region=406%2C0%2C878%2C878&amp;width=480",
    	name: "Darksaber",
    	description: "An ancient, black-bladed lightsaber wielded by Death Watch's Pre Vizsla and later Darth Maul.",
    	inventory: 1000,
    	price: (Math.random() * (10000 - 3)).toFixed(2) + 3
    },
    {
    	// url: "http://www.starwars.com/databank/datapad">,
    	image: "http://img.lum.dolimg.com/v1/images/image_8c053641.jpeg?region=775%2C62%2C688%2C689&amp;width=480",
    	name: "Datapad",
    	description: "Datapads are used for a variety of informational purposes. Most feature a screen, input mechanism, and can store or display holographic data and imagery.",
    	inventory: 1000,
    	price: (Math.random() * (10000 - 3)).toFixed(2) + 3
    },
    {
    	// url: "http://www.starwars.com/databank/death-star-superlaser">,
    	image: "http://img.lum.dolimg.com/v1/images/death-star-super-laser-main-image_408bebb4.jpeg?region=618%2C0%2C655%2C656&amp;width=480",
    	name: "Death Star Superlaser",
    	description: "Each of the Empire’s Death Stars was built around a terrifying weapon – a superlaser array capable of destroying a planet. According to legend, the ancient Sith used massive kyber crystals to create superweapons; duringthe Clone Wars, the Geonosians revived the superlaser design. The Empire constructed the first Death Star in secret for nearly two decades before using it to destroy Alderaan; the second Death Star boasted a morepowerful superlaser, with improved targeting sensors and power regulators.",
    	inventory: 1000,
    	price: (Math.random() * (10000 - 3)).toFixed(2) + 3
    },
    {
    	// url: "http://www.starwars.com/databank/dejarik">,
    	image: "http://img.lum.dolimg.com/v1/images/image_bc196054.jpeg?region=307%2C0%2C1080%2C1080&amp;width=480",
    	name: "Dejarik",
    	description: "A popular holographic board game, Dejarik is commonly played on starships throughout the galaxy. It uses as its game pieces creatures both real and mythological, with a successful move resulting in one monster decisivelybeating another in combat. Though Dejarik is a friendly game played by droids, humans, and aliens alike, Wookiees are particularly notorious for becoming rather upset upon losing.",
    	inventory: 1000,
    	price: (Math.random() * (10000 - 3)).toFixed(2) + 3
    },
    {
    	// url: "http://www.starwars.com/databank/droid-popper">,
    	image: "http://img.lum.dolimg.com/v1/images/databank_droidpopper_01_169_b5ada6cc.jpeg?region=850%2C564%2C293%2C292",
    	name: "Droid Popper",
    	description: "Also called an Electro Magnetic Pulse grenade, or EMP grenade, these were used by Jedi and clones in the Clone Wars. When detonated close to a droid, it would disable it. Effectiveness depended on distance and placementrelative to the target.",
    	inventory: 1000,
    	price: (Math.random() * (10000 - 3)).toFixed(2) + 3
    },
    {
    	// url: "http://www.starwars.com/databank/electrostaff">,
    	image: "http://img.lum.dolimg.com/v1/images/databank_electrostaff_01_169_16d9e207.jpeg?region=5%2C0%2C878%2C878&amp;width=480",
    	name: "Electrostaff",
    	description: "These mechanically complicated, double-ended electrostaffs were designed to repel lightsaber strikes. They conducted electricity that could block the Jedi blades and were able to incapacitate organic beings of mostphysiologies. They were the chief weapon of the Magnaguards that protected General Grievous during his terrorization of the galaxy during the Clone Wars. Electrostaffs were also used as a tool for catching joopa beneaththe surface of the planet Seelos by sending bolts of energy along a laser line.",
    	inventory: 1000,
    	price: (Math.random() * (10000 - 3)).toFixed(2) + 3
    },
    {
    	// url: "http://www.starwars.com/databank/ezra-s-lightsaber">,
    	image: "http://img.lum.dolimg.com/v1/images/image_e6ce2b07.jpeg?region=420%2C0%2C1080%2C1080&amp;width=480",
    	name: "Ezra's Lightsaber",
    	description: "Upon his surprise discovery of a kyber crystal in Lothal's secret Jedi Temple, Ezra Bridger built his own lightsaber. Using gear and materials gifted him by his friends, Ezra's lightsaber has a more utilitarian appearancethan a typical Jedi weapon. It also has a hidden feature: Ezra built in a firing mechanism, allowing his lightsaber to shoot stun blasts.",
    	inventory: 1000,
    	price: (Math.random() * (10000 - 3)).toFixed(2) + 3
    },
    {
    	// url: "http://www.starwars.com/databank/force-choke">,
    	image: "http://img.lum.dolimg.com/v1/images/databank_forcechoke_01_169_93e4b0cf.jpeg?region=168%2C0%2C877%2C878&amp;width=480",
    	name: "Force Choke",
    	description: "The Force choke is another tool employed by Sith to intimidate and even kill their opponents. Sith usually visualize the ability with a claw-like or crushing hand gesture, and strangle a victim through the power ofthe dark side. The result is an often painful, slow death.",
    	inventory: 1000,
    	price: (Math.random() * (10000 - 3)).toFixed(2) + 3
    },
    {
    	// url: "http://www.starwars.com/databank/force-lightning">,
    	image: "http://img.lum.dolimg.com/v1/images/databank_forcelightning_01_169_b1eb5a6f.jpeg?region=460%2C0%2C878%2C878&amp;width=480",
    	name: "Force Lightning",
    	description: "Force lightning is a dark side ability used to torture, disfigure, and even kill one’s victims. Blue in color, Sith shoot Force lightning from their hands by calling on their hatred and aggressive feelings. However,while a deadly weapon, it is not unstoppable. Force lightning can be deflected and absorbed by a lightsaber, and select Jedi have proved able to neutralize the technique through the power of the light side.",
    	inventory: 1000,
    	price: (Math.random() * (10000 - 3)).toFixed(2) + 3
    },
    {
    	// url: "http://www.starwars.com/databank/force-push">,
    	image: "http://img.lum.dolimg.com/v1/images/databank_forcepush_01_169_645aafe8.jpeg?region=138%2C0%2C878%2C878&amp;width=480",
    	name: "Force Push",
    	description: "A key Force ability, the Force push is both an offensive and defensive technique. It is employed primarily by Jedi but also used by the Sith, and is accomplished with a forward hand gesture. Force pushes can range inintensity from simple movements to dangerous, powerful shoves that can disorient and harm opponents in battle.",
    	inventory: 1000,
    	price: (Math.random() * (10000 - 3)).toFixed(2) + 3
    },
    {
    	// url: "http://www.starwars.com/databank/gungan-personal-energy-shield">,
    	image: "http://img.lum.dolimg.com/v1/images/databank_gunganpersonalenergyshield_01_169_78606583.jpeg?region=341%2C0%2C878%2C878&amp;width=480",
    	name: "Gungan Personal Energy Shield",
    	description: "Protective shields featuring a screen of energy that could be turned on or off. Deflects blaster fire and can protect against solid weaponry.",
    	inventory: 1000,
    	price: (Math.random() * (10000 - 3)).toFixed(2) + 3
    },
    {
    	// url: "http://www.starwars.com/databank/holocron">,
    	image: "http://img.lum.dolimg.com/v1/images/Holocron_6d6b7de1.jpeg?region=390%2C0%2C1080%2C1080&amp;width=480",
    	name: "Holocron",
    	description: "Holocrons are ancient repositories of knowledge and wisdom that can only be accessed by those skilled in the Force. Both Jedi and Sith use them to record and preserve their teachings, creating a record for future generationsseeking to understand the mysteries of the Force. During the time of the Republic, countless holocrons were stored on Coruscant; after the Jedi purge, however, they became scarce remnants of an era long gone.",
    	inventory: 1000,
    	price: (Math.random() * (10000 - 3)).toFixed(2) + 3
    },
    {
    	// url: "http://www.starwars.com/databank/holographic-disguise-matrix">,
    	image: "http://img.lum.dolimg.com/v1/images/databank_holographicdisguisematrix_01_169_14f47b84.jpeg?region=341%2C0%2C878%2C878&amp;width=480",
    	name: "Holographic Disguise Matrix",
    	description: "Developed by the technical genius Sinrich, the holographic disguise matrix is an experimental example of advanced holography. Contained within a small, palm-sized emitter, the disguise matrix -- also known as the shadowhologram -- cloaks a user in an exacting, true-color holographic shell. Disparities between subject build and height are compensated for by advanced sensors that holographically \"paint in\" any differences. Combinedwith vocal emulators and other sensor-baffling gear, the shadow hologram emitter is the ideal infiltration tool -- or would be, if its shortcomings in power supply and image consistency could be smoothed out.",
    	inventory: 1000,
    	price: (Math.random() * (10000 - 3)).toFixed(2) + 3
    },
    {
    	// url: "http://www.starwars.com/databank/holonet-news">,
    	image: "http://img.lum.dolimg.com/v1/images/image_4e0f58f4.jpeg?region=363%2C0%2C1080%2C1080&amp;width=480",
    	name: "HoloNet News",
    	description: "HoloNet News was the official state-sanctioned news agency of the Empire, with anchor Alton Kastle delivering broadcasts on key issues and occurrences of the day. Briefs were sent via hyperspace transmission that allowedinstantaneous connection throughout the galaxy. The HoloNet News was taken over by the Republic during the Clone Wars to ensure that information was not compromised by enemy forces, and became the mouthpiece of theEmpire. The Ministry of Information's Pollux Hax oversaw the agency, ensuring that stories were consistent with government messaging.",
    	inventory: 1000,
    	price: (Math.random() * (10000 - 3)).toFixed(2) + 3
    },
    {
    	// url: "http://www.starwars.com/databank/homing-spider-droid">,
    	image: "http://img.lum.dolimg.com/v1/images/homing-spider-droid-main-image_0cf45312.jpeg?region=460%2C0%2C667%2C665&amp;width=480",
    	name: "Homing Spider Droid",
    	description: "Homing spider droids' long mechanical legs and dish-shaped laser cannons gave them an imposing mix of speed and destructive power, which they used to devastating effect against Republic ground forces during the Battleof Geonosis.",
    	inventory: 1000,
    	price: (Math.random() * (10000 - 3)).toFixed(2) + 3
    },
    {
    	// url: "http://www.starwars.com/databank/hydroid-medusa">,
    	image: "http://img.lum.dolimg.com/v1/images/databank_hydroidmedusa_01_169_c8978f0a.jpeg?region=341%2C0%2C878%2C878&amp;width=480",
    	name: "Hydroid Medusa",
    	description: "Beautiful and dangerous at the same time, the Hydroid Medusa is a cybernetically enhanced biological weapon developed by the Karkarodons of Karkaris. These immense jellyfish incorporate armor and powerplants that turnthem into near-unstoppable engines of underwater destruction. Separatist landing ships airdropped many Hydroid Medusas into the Mon Cala oceans during the Clone Wars, giving the Separatists the advantage in the civilwar that erupted on the water world.",
    	inventory: 1000,
    	price: (Math.random() * (10000 - 3)).toFixed(2) + 3
    },
    {
    	// url: "http://www.starwars.com/databank/imperial-xx-23-s-thread-tracer">,
    	image: "http://img.lum.dolimg.com/v1/images/image_d1209d71.jpeg?region=603%2C127%2C824%2C823&amp;width=480",
    	name: "Imperial XX-23 S-Thread Tracer",
    	description: "Developed by Sienar Fleet Systems for the Empire, the Imperial XX-23 S-Thread Tracer was made specifically to track ships through hyperspace to destination. It was housed in a missle-like shell, allowing the XX-23 S-Threadto be fired at craft from long distances or during chases. The Inquisitor's TIE Advanced fighter was outfitted with the technology, which he used to tag the Ghost starship.",
    	inventory: 1000,
    	price: (Math.random() * (10000 - 3)).toFixed(2) + 3
    },
    {
    	// url: "http://www.starwars.com/databank/ion-blaster">,
    	image: "http://img.lum.dolimg.com/v1/images/ion-blaster_62b30531.jpeg?region=459%2C0%2C1037%2C1034&amp;width=480",
    	name: "Ion Blaster",
    	description: "While hunting for salvage, Tatooine’s Jawas carry customized ion blasters built from scavenged parts. The weapons fire blasts of ionized particles, which disrupt droids’ electronic systems, shutting them down. Ion weaponsare a long-established galactic technology, and come in a range of sizes and power levels – massive planet-based ion cannons target orbiting warships instead of droids, but work on the same principle.",
    	inventory: 1000,
    	price: (Math.random() * (10000 - 3)).toFixed(2) + 3
    },
    {
    	// url: "http://www.starwars.com/databank/ion-cannon">,
    	image: "http://img.lum.dolimg.com/v1/images/ion-cannon_af46d6df.jpeg?region=439%2C0%2C661%2C663&amp;width=480",
    	name: "Ion Cannon",
    	description: "Ion weapons fire ionized particles that disrupt electronic systems. These weapons range in size from Jawas’ custom ion blasters, used to disable droids, to massive cannons that can turn starships into silent, driftinghulks. During the Clone Wars, the Separatists mounted twin ion cannons on the dreadnought Malevolence, which laid waste to several Republic task forces before her destruction. Years later, the Alliance defended Hoth’sEcho Base with a powerful surface-mounted ion cannon.",
    	inventory: 1000,
    	price: (Math.random() * (10000 - 3)).toFixed(2) + 3
    },
    {
    	// url: "http://www.starwars.com/databank/jedi-breathing-device">,
    	image: "http://img.lum.dolimg.com/v1/images/databank_jedibreathingdevice_01_169_9c976d1b.jpeg?region=222%2C0%2C878%2C878&amp;width=480",
    	name: "Jedi Breathing Device",
    	description: "A small breather that fits snugly into a Jedi Knight's utility belt, the A99 aquata breather is a compact mouthpiece designed to supply its wearer with a breathable gas. The A99 has advanced filters to allow it to functionunderwater, in a vacuum, and in certain poisonous environments. The A99 has a number of variants to accommodate a variety of alien physiologies. The A99's miniature compressed air tanks can supply two hours of oxygen.",
    	inventory: 1000,
    	price: (Math.random() * (10000 - 3)).toFixed(2) + 3
    },
    {
    	// url: "http://www.starwars.com/databank/jedi-mind-trick">,
    	image: "http://img.lum.dolimg.com/v1/images/databank_jedimindtrick_01_169_a491266d.jpeg?region=425%2C0%2C878%2C878&amp;width=480",
    	name: "Jedi Mind Trick",
    	description: "The Force can have a powerful effect on the weak-minded, a phenomenon Jedi sometimes take advantage of in pursuing their missions. An experienced Jedi can use the Force to implant a suggestion in the minds of thosethey encounter, encouraging them to comply with the Jedi’s wishes.",
    	inventory: 1000,
    	price: (Math.random() * (10000 - 3)).toFixed(2) + 3
    },
    {
    	// url: "http://www.starwars.com/databank/kanans-lightsaber">,
    	image: "http://img.lum.dolimg.com/v1/images/image_523917a7.jpeg?region=420%2C0%2C1080%2C1080&amp;width=480",
    	name: "Kanan's Lightsaber",
    	description: "A survivor of Order 66, Kanan Jarrus hid his Jedi identity from all but those closest to him. Carrying a lightsaber openly would be too dangerous in the age of the Empire, so he kept his Jedi weapon in disparate pieceson his belt. Kanan would assemble his lightsaber, which had a blue plasma blade, only when necessary.",
    	inventory: 1000,
    	price: (Math.random() * (10000 - 3)).toFixed(2) + 3
    },
    {
    	// url: "http://www.starwars.com/databank/lasan-honor-guard-ab-75-bo-rifle">,
    	image: "http://img.lum.dolimg.com/v1/images/image_bd5321b0.jpeg?region=420%2C0%2C1080%2C1080&amp;width=480",
    	name: "Lasan Honor Guard AB-75 Bo-Rifle",
    	description: "The AB-75 bo-rifle was the weapon of the Lasan Honor Guard, featuring a blaster barrel, bayonet, and electromagnetic pulse-generator tip. It required a great degree of skill to wield; Agent Kallus of the Imperial SecurityBureau took an AB-75 from a fallen Lasat Honor Guard he defeated in battle.",
    	inventory: 1000,
    	price: (Math.random() * (10000 - 3)).toFixed(2) + 3
    },
    {
    	// url: "http://www.starwars.com/databank/lightsaber">,
    	image: "http://img.lum.dolimg.com/v1/images/Lightsaber_853fb596.jpeg?region=178%2C0%2C813%2C812&amp;width=480",
    	name: "Lightsaber",
    	description: "The lightsaber is the weapon of a Jedi, an elegant weapon of a more civilized age. It can be used to cut through blast doors or enemies alike. Using the Force, a Jedi can predict and deflect incoming blaster bolts,and reflect them.",
    	inventory: 1000,
    	price: (Math.random() * (10000 - 3)).toFixed(2) + 3
    },
    {
    	// url: "http://www.starwars.com/databank/lightsaber-pike">,
    	image: "http://img.lum.dolimg.com/v1/images/databank_lightsaberpike_01_169_c0e0248b.jpeg?region=0%2C0%2C878%2C878&amp;width=480",
    	name: "Lightsaber Pike",
    	description: "Similar to the double-bladed lightsaber, the lightsaber pike featured two blades (yellow hued) at each end of a staff. It was used by the Jedi Temple Guards.",
    	inventory: 1000,
    	price: (Math.random() * (10000 - 3)).toFixed(2) + 3
    },
    {
    	// url: "http://www.starwars.com/databank/lobot-tech-headgear">,
    	image: "http://img.lum.dolimg.com/v1/images/image_858301cd.jpeg?region=420%2C0%2C1080%2C1080&amp;width=480",
    	name: "Lobot-Tech Headgear",
    	description: "Lobot-Tech headgear was an Imperial technology designed to increase productivity in low-level workers. The cybernetic implant, however, would often erase the personality of its subject and, occasionally, cause theirbehavior to become erratic. Lando Calrissian's aide utilized the technology, as did a Rodian named Tseebo, who used the Lobot-Tech headgear to steal Imperial data and plans.",
    	inventory: 1000,
    	price: (Math.random() * (10000 - 3)).toFixed(2) + 3
    },
    {
    	// url: "http://www.starwars.com/databank/luke-skywalkers-lightsaber-rotj">,
    	image: "http://img.lum.dolimg.com/v1/images/luke-skywalkers-lightsaber-rotj_8989c019.jpeg?region=490%2C374%2C293%2C292",
    	name: "Luke Skywalker's Lightsaber (RotJ)",
    	description: "After losing his father’s lightsaber on Cloud City, Luke Skywalker constructed a replacement with a green plasma blade, its hilt similar to that of Obi-Wan Kenobi’s weapon. Luke hid his lightsaber inside R2-D2’s domeduring his mission to rescue Han Solo from Jabba the Hutt, and surrendered the weapon to Darth Vader as part of his effort to reawaken the spirit of Anakin Skywalker.",
    	inventory: 1000,
    	price: (Math.random() * (10000 - 3)).toFixed(2) + 3
    },
    {
    	// url: "http://www.starwars.com/databank/restraining-bolt">,
    	image: "http://img.lum.dolimg.com/v1/images/screen_shot_2015-08-10_at_10_fbc45d84.jpeg?region=463%2C0%2C553%2C550&amp;width=480",
    	name: "Restraining Bolt",
    	description: "A restraining bolt is a small cylindrical device that restricts a droid’s actions when connected to its systems. Droid owners install restraining bolts to limit actions to a set of desired behaviors. Restraining boltswork in conjunction with droid “callers,” small handheld devices that compel a droid to stop what it’s doing and report to its master.",
    	inventory: 1000,
    	price: (Math.random() * (10000 - 3)).toFixed(2) + 3
    },
    {
    	// url: "http://www.starwars.com/databank/rps-6-rocket-launcher">,
    	image: "http://img.lum.dolimg.com/v1/images/rps-6-rocket-launcher_20cb7a0f.jpeg?region=542%2C0%2C877%2C877&amp;width=480",
    	name: "RPS-6 Rocket Launcher",
    	description: "The RPS-6 rocket launcher was a single-shot, shoulder-fired weapon, capable of great destruction but requiring expert aim. It was a favorite of clone trooper Gregor, who used the RPS-6 to destroy a TIE fighter fromlong range on Seelos.",
    	inventory: 1000,
    	price: (Math.random() * (10000 - 3)).toFixed(2) + 3
    },
    {
    	// url: "http://www.starwars.com/databank/sabacc">,
    	image: "http://img.lum.dolimg.com/v1/images/image_358c930f.jpeg?region=364%2C0%2C900%2C900&amp;width=480",
    	name: "Sabacc",
    	description: "A popular card game played throughout the galaxy, often with high stakes. In one notable game, Zeb Orrelios of the Ghost crew bet -- and lost -- the droid Chopper to the sly smuggler Lando Calrissian. Calrissian hadan \"Idiot's Array\": an unbeatable (and rare) hand.",
    	inventory: 1000,
    	price: (Math.random() * (10000 - 3)).toFixed(2) + 3
    },
    {
    	// url: "http://www.starwars.com/databank/separatist-encryption-module">,
    	image: "http://img.lum.dolimg.com/v1/images/acw_ia_107443_aa71aa69.jpeg?region=840%2C0%2C807%2C805&amp;width=480",
    	name: "Separatist Encryption Module",
    	description: "An experimental piece of Separatist technology, this compact palm-sized encryption module created an unbreakable code that scrambled Separatist transmissions, preventing the Republic from intercepting vital intelligence.Republic analysts were able to decipher that these transmissions came from General Grievous, and portended a devastating strike against the Republic, but any solid information remained agonizingly out of reach. Tothat end, the Republic launched a special mission to recover the device from the heart of a Separatist dreadnought.",
    	inventory: 1000,
    	price: (Math.random() * (10000 - 3)).toFixed(2) + 3
    },
    {
    	// url: "http://www.starwars.com/databank/shield-generators">,
    	image: "http://img.lum.dolimg.com/v1/images/shield-generators-main-image_54a8a93d.jpeg?region=0%2C0%2C878%2C878&amp;width=480",
    	name: "Shield Generators",
    	description: "Developed by Kuat Drive Yards, these military grade shield generators were a hot commodity on the black market. Thanks to hover capabilities, the Colicoid 49-v99 Deflector models were easily portable and could be movedfrom ship to ship. The Lothal rebels managed to steal an Imperial stockpile of the shield generators, and traded several to Lando Calrissian for passage off the planet.",
    	inventory: 1000,
    	price: (Math.random() * (10000 - 3)).toFixed(2) + 3
    },
    {
    	// url: "http://www.starwars.com/databank/smoke-bomb">,
    	image: "http://img.lum.dolimg.com/v1/images/image_ba610557.jpeg?region=480%2C0%2C960%2C960&amp;width=480",
    	name: "Smoke Bomb",
    	description: "Not physically harmful, smoke bombs are employed to create diversions and/or provide cover. Smoke bombs, which unleash clouds of dark smoke, come in many shapes, sizes, and formats -- some can be detonated with a timer,while others explode on impact. Sabine Wren of the Ghost crew made ample use of them during battles with the Empire.",
    	inventory: 1000,
    	price: (Math.random() * (10000 - 3)).toFixed(2) + 3
    },
    {
    	// url: "http://www.starwars.com/databank/t-7-ion-disruptor-rifles">,
    	image: "http://img.lum.dolimg.com/v1/images/image_8caf8b3a.jpeg?region=163%2C0%2C1080%2C1080&amp;width=480",
    	name: "T-7 Ion Disruptor Rifles",
    	description: "T-7 ion disruptor rifles were deadly, powerful weapons capable of disabling starships; when used against organic beings, the results could be gruesome. As a result, they were banned by the Senate. During the age ofthe Empire, Imperial forces used the disruptors to clear out worlds and, sometimes, slaughter their inhabitants, as was the case with their takeover of Lasan.",
    	inventory: 1000,
    	price: (Math.random() * (10000 - 3)).toFixed(2) + 3
    },
    {
    	// url: "http://www.starwars.com/databank/the-inquisitor-s-lightsaber">,
    	image: "http://img.lum.dolimg.com/v1/images/image_253e49bc.jpeg?region=350%2C0%2C900%2C900&amp;width=480",
    	name: "The Inquisitor's Lightsaber",
    	description: "The Inquisitor, the Empire's ruthless Jedi hunter, carried a lightsaber built to destroy. The weapon featured dual modes, crescent and disc, in addition to some deadly surprises. In its crescent setting, the lightsaberhad a single red blade; in disc mode, a second blade emerged, and a spin feature turned the lightsaber in a blindingly fast killing tool. The Inquisitor relished combat, and his weapon proved very effective at intimidating,disorienting, and dispatching his enemies.",
    	inventory: 1000,
    	price: (Math.random() * (10000 - 3)).toFixed(2) + 3
    },
    {
    	// url: "http://www.starwars.com/databank/thermal-detonator">,
    	image: "http://img.lum.dolimg.com/v1/images/databank_thermaldetonator_01_169_263981fd.jpeg?region=383%2C0%2C876%2C878&amp;width=480",
    	name: "Thermal Detonator",
    	description: "Thermal detonators are grenade-like weapons that pack tremendous explosive power into a small sphere, and are used by bounty hunters and military forces such as the Empire’s stormtroopers. Cad Bane used thermal detonatorsduring his assault on the Senate Building; a generation later, Princess Leia threatened Jabba the Hutt with a thermal detonator while disguised as the Ubese hunter Boushh.",
    	inventory: 1000,
    	price: (Math.random() * (10000 - 3)).toFixed(2) + 3
    },
    {
    	// url: "http://www.starwars.com/databank/training-remote">,
    	image: "http://img.lum.dolimg.com/v1/images/training-remote-main-image_5a97d08c.jpeg?region=271%2C0%2C542%2C541&amp;width=480",
    	name: "Training Remote",
    	description: "These miniature droids are used in combat training, darting back and forth on repulsors and firing sting beams that can be set for a variety of intensity levels. Both younglings and established Jedi trained with remotes,using them as teaching tools for avoiding blaster bolts and deflecting them with lightsabers.",
    	inventory: 1000,
    	price: (Math.random() * (10000 - 3)).toFixed(2) + 3
    },
    {
    	// url: "http://www.starwars.com/databank/transponders">,
    	image: "http://img.lum.dolimg.com/v1/images/transponders-main-image_7f8c54d4.jpeg?region=398%2C0%2C878%2C878&amp;width=480",
    	name: "Transponders",
    	description: "Masking transponders, made by the Corellian Engineering Corporation, were used to transmit ship identification data; they were reprogrammable so that they could project false profiles for those who wished to not beseen. When the Ghost rebels needed to escape Lothal, they used Lando Calrissian’s transponders to send out the same signal throughout the planet. As a result, the Empire was confused, and their ships were forced toinvestigate each signal. This gave the rebels the opportunity they needed to jump into hyperspace.",
    	inventory: 1000,
    	price: (Math.random() * (10000 - 3)).toFixed(2) + 3
    },
    {
    	// url: "http://www.starwars.com/databank/umbaran-mhc">,
    	image: "http://img.lum.dolimg.com/v1/images/umbaran_mhc_743a0f27.png?region=198%2C0%2C391%2C391",
    	name: "Umbaran MHC",
    	description: "During the Republic campaign to secure Umbara, the natives of the shadowy world unleashed all manner of previously unseen advanced technology against the clone trooper forces. The Umbaran MHC -- mobile heavy cannon-- is a titanic juggernaut built atop six powerful, ground-shaking legs. The dome-shaped body of the spider-like tank is heavily armored, able to withstand anti-armor infantry rockets. Mounted atop the dome on anarticulated arm is a powerful electromagnetic plasma cannon. The monstrous MHC has almost no weaknesses.",
    	inventory: 1000,
    	price: (Math.random() * (10000 - 3)).toFixed(2) + 3
    },
    {
    	// url: "http://www.starwars.com/databank/vocal-emulator">,
    	image: "http://img.lum.dolimg.com/v1/images/databank_vocalemulator_01_169_2ba87603.jpeg?region=344%2C0%2C877%2C878&amp;width=480",
    	name: "Vocal Emulator",
    	description: "A hard-to-come-by example of technology custom made for covert operations, a vocal emulator is a device used by spies to alter their voiceprint to a perfect duplicate of a sample subject. The small sphere records asample of a target subject's voice, and tiny processors within analyze pitch, frequency, as well as intonation and inflection. The device then sprouts limbs to assist the spy in swallowing the emulator. The rigidtentacle like legs part the way through the throat and past the hyoid bone, to connect directly into the larynx.",
    	inventory: 1000,
    	price: (Math.random() * (10000 - 3)).toFixed(2) + 3
    }
  ];
  return Product.createAsync(products);
}

mongoose.connection.on('open', function() {

mongoose.connection.db.dropCollection('products', function() {
  seedProducts().then(function(products) {
    console.log("Finsihed insering products!")
    mongoose.connection.close();
  })
})
});

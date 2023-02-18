const router = require('express').Router();// Import the express package and use the Router() method to create a new router object
// const Champion = require('../../models/Champion');// Import the Champion model from the models/Champion.js file


// router.get('/', async (req, res) => {
//     try {
//         res.render('allChampions', {

//         })
//     } catch (e) {
//         console.log(e);
//         res.status(500).json(e);
//     }
// });

router.get('/', async (req, res) => {
    try {
		const leagueOfLegendsAPI = "http://ddragon.leagueoflegends.com/cdn/13.3.1/data/en_US/champion.json";
		const response = await fetch(leagueOfLegendsAPI);
		const data = await response.json();
		const champArray = Object.keys(data.data);
		const champions = champArray.map(champIndex => {
		const { data: { [champIndex]: { blurb, id, image: { full, group, sprite }, info: { attack, defense, difficulty, magic }, key, name, partype, stats: { armor, armorperlevel, attackdamage, attackdamageperlevel, attackrange, attackspeed, attackspeedperlevel, crit, critperlevel, hp, hpperlevel, hpregen, hpregenperlevel, movespeed, mp, mpperlevel, mpregen, mpregenperlevel, spellblock, spellblockperlevel }, tags: { 0: role1, 1: role2 }, title } } } = data;
		// return { blurb, id, full, group, sprite, attack, defense, difficulty, magic, key, name, partype, armor, armorperlevel, attackdamage, attackdamageperlevel, attackrange, attackspeed, attackspeedperlevel, crit, critperlevel, hp, hpperlevel, hpregen, hpregenperlevel, movespeed, mp, mpperlevel, mpregen, mpregenperlevel, spellblock, spellblockperlevel, role1, role2, title };
	});console.log(champions);
	res.render('allChampions', { champions} );
	} catch (error) {
	console.error(error);
	res.status(500).send('Error retrieving champion data');
	}
});
    

module.exports = router;// Export the router object to be used in the server.js file
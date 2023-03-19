const router = require('express').Router();
const Champion = require('../../models/champion');


router.get('/', async (req, res) => {
    try {
        const championData = await Champion.findAll({

        });
        const champions = championData.map((champion) => champion.get({ plain: true }));
        res.render('allChampions', { champions } );
    } catch (err) {
        res.status(500).json(err);
    }
});



module.exports = router;
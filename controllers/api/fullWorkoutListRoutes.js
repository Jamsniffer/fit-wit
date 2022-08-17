const router = require("express").Router();
const models = require("../../models");

router.post('/:type/:id', async (req, res) => {
    console.log('SOmethign hut us!');
    const { type, id } = req.params;
    const data = await models[type].findByPk(id);
    const pureData = console.log(data.get({ plain: true }));
    console.log(pureData);

})

module.exports = router;

const router = require("express").Router();
const { User } = require("../../models");

router.post('/:type/:id', async (req, res) => {
    console.log('SOmethign hut us!');
    const {type, id} = req.params;
    const data = await models[type].findByPk(id);
    const pureData = console.log(data.get({plain:true}));
    res.json(pureData);
    addWorkoutToUser((pureData) => {
        // matt comment: this is a test to see if it works to here. 
        // i think we have to have User logged in for a user to be
        // here, but we can just hardcode one in
        console.log(User)
    });
   
})

module.exports = router;

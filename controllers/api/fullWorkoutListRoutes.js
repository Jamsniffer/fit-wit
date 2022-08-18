const router = require("express").Router();
const models = require("../../models");

router.post('/:type/:id', async (req, res) => {
    console.log('SOmethign hut us!');
    const { type, id } = req.params;
    const data = await models[type].findByPk(id);
    const workoutData = data.get({ plain: true });
    const userData = await models.User.findByPk(req.session.user_id);
    console.log('user data is: ', userData);
    const pureUser = userData.get({ plain: true });
    console.log('pureUser', pureUser);
    const newWorkout = [...JSON.parse(pureUser.fullWorkoutListArray), workoutData];
    await models.User.update({fullWorkoutListArray: JSON.stringify(newWorkout)},  {where: {id: req.session.user_id}}, )
    console.log( await models.User.findByPk(req.session.user_id));
})

module.exports = router;

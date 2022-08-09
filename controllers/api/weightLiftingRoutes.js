//import model here 
const router = require('express').Router();
const { WeightLifting } = require('../../models/WeightLifting');

router.get('/', async (req, res) => {
    //find all
    WeightLifting.findAll().then((weightLiftingData) => {
        res.json(weightLiftingData);
    })
});

router.get('/:id', (req, res) => {
    //find by id
    WeightLifting.findByPk(req.params.id).then((weightLiftingData) => {
        res.json(weightLiftingData);
    });
});

router.post('/', (req, res) => {
    //add to api
    WeightLifting.create(req.body)
        .then((newWeightLifting) => {
            res.json(newWeightLifting);
        })
        .catch((err) => {
            res.json(err);
        });
});

router.put('/:id', (req, res) => {
    //update by id
    WeightLifting.update(
        {
            // All the fields you can update and the data attached to the request body.
            name: req.body.name,
            description: req.body.description
        },
        {
            where: {
                weightLifting_id: req.params.weightLifting_id,
            },
        }
    )
        .then((updatedWeightLifting) => {
            res.json(updatedWeightLifting);
        })
        .catch((err) => {
            console.log(err);
            res.json(err);
        })
});

router.delete('/:id', (req, res) => {
    //delete by id
    res.send('made it to delete')
    WeightLifting.destroy({
        where: {
            weightLifting_id: req.params.weightLifting_id,
        },
    })
        .then((deletedWeightLifting) => {
            res.json(deletedWeightLifting);
        })
        .catch((err) => {
            res.json(err);
        });
});

module.exports = router
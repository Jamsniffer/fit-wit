const router = require('express').Router();
const {Weighttraining} = require('../../models');

router.get('/', async (req, res) => {
    //find all
    Weighttraining.findAll()
    .then((weighttrainingData) => {
        res.json(weighttrainingData);
    })
    .catch(err => {
        console.log('error/ weighttraining:', err)
        res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
    //find by id
    Weighttraining.findByPk(req.params.id)
    .then((weighttrainingData) => {
        res.json(weighttrainingData);
    })
    .catch(err => {
        console.log('error/ weighttraining:', err)
        res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
    //add to api
    Weighttraining.create(req.body)
        .then((newWeighttraining) => {
            res.json(newWeighttraining);
        })
        .catch((err) => {
            res.json(err);
        });
});

router.put('/:id', (req, res) => {
    //update by id
    Weighttraining.update(
        {
            // All the fields you can update and the data attached to the request body.
            name: req.body.name,
            description: req.body.description
        },
        {
            where: {
                Weighttraining_id: req.params.Weighttraining_id,
            },
        }
    )
        .then((updatedWeighttraining) => {
            res.json(updatedWeighttraining);
        })
        .catch((err) => {
            console.log(err);
            res.json(err);
        });
});

router.delete('/:id', (req, res) => {
    //delete by id
    res.send('made it to delete')
    Weighttraining.destroy({
        where: {
            Weighttraining_id: req.params.Weighttraining_id,
        },
    })
        .then((deletedWeighttraining) => {
            res.json(deletedWeighttraining);
        })
        .catch((err) => {
            res.json(err);
        });
});

module.exports = router
const router = require('express').Router();
const {Bodybuilding} = require('../../models');

router.get('/', async (req, res) => {
    //find all
    Bodybuilding.findAll()
    .then((BodybuildingData) => {
        res.json(BodybuildingData);
    })
    .catch(err => {
        console.log('error/ bodybuilding:', err)
        res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
    //find by id
    Bodybuilding.findByPk(req.params.id)
    .then((BodybuildingData) => {
        res.json(BodybuildingData);
    })
    .catch(err => {
        console.log('error/ bodybuilding:', err)
        res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
    //add to api
    Bodybuilding.create(req.body)
        .then((newBodybuilding) => {
            res.json(newBodybuilding);
        })
        .catch((err) => {
            res.json(err);
        });
});

router.put('/:id', (req, res) => {
    //update by id
    Bodybuilding.update(
        {
            // All the fields you can update and the data attached to the request body.
            name: req.body.name,
            description: req.body.description
        },
        {
            where: {
                bodybuilding_id: req.params.bodybuilding_id,
            },
        }
    )
        .then((updatedBodybuilding) => {
            res.json(updatedBodybuilding);
        })
        .catch((err) => {
            console.log(err);
            res.json(err);
        });
});

router.delete('/:id', (req, res) => {
    //delete by id
    res.send('made it to delete')
    Bodybuilding.destroy({
        where: {
            bodybuilding_id: req.params.bodybuilding_id,
        },
    })
        .then((deletedBodybuilding) => {
            res.json(deletedBodybuilding);
        })
        .catch((err) => {
            res.json(err);
        });
});

module.exports = router
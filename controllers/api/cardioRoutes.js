//import model here 
const router = require('express').Router();
const {Cardio} = require('../../models');

router.get('/', async (req, res) => {
    //find all
    Cardio.findAll()
    .then((cardioData) => {
        res.json(cardioData);
    })
    .catch(err => {
        console.log('error/ cardio:', err)
        res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
    //find by id
    Cardio.findByPk(req.params.id)
    .then((cardioData) => {
        res.json(cardioData);
    })
    .catch(err => {
        console.log('error/ cardio:', err)
        res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
    //add to api
    Cardio.create(req.body)
        .then((newCardio) => {
            res.json(newCardio);
        })
        .catch((err) => {
            res.json(err);
        });
});

router.put('/:id', (req, res) => {
    //update by id
    Cardio.update(
        {
            // All the fields you can update and the data attached to the request body.
            name: req.body.name,
            description: req.body.description
        },
        {
            where: {
                cardio_id: req.params.cardio_id,
            },
        }
    )
        .then((updatedCardio) => {
            res.json(updatedCardio);
        })
        .catch((err) => {
            console.log(err);
            res.json(err);
        });
});

router.delete('/:id', (req, res) => {
    //delete by id
    res.send('made it to delete')
    Cardio.destroy({
        where: {
            cardio_id: req.params.cardio_id,
        },
    })
        .then((deletedCardio) => {
            res.json(deletedCardio);
        })
        .catch((err) => {
            res.json(err);
        });
});

module.exports = router
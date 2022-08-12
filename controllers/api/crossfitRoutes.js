//import model here 
const router = require('express').Router();
const Crossfit = require('../../models');

router.get('/', async (req, res) => {
    //find all
    Crossfit.findAll()
    .then((crossfitData) => {
        res.json(crossfitData);
    })
    .catch(err => {
        console.log('error/ crossfit:', err)
        res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
    //find by id
    Crossfit.findByPk(req.params.id)
    .then((crossfitData) => {
        res.json(crossfitData);
    })
    .catch(err => {
        console.log('error/ crossfit:', err)
        res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
    //add to api
    Crossfit.create(req.body)
        .then((newCrossfit) => {
            res.json(newCrossfit);
        })
        .catch((err) => {
            res.json(err);
        });
});

router.put('/:id', (req, res) => {
    //update by id
    Crossfit.update(
        {
            // All the fields you can update and the data attached to the request body.
            name: req.body.name,
            description: req.body.description
        },
        {
            where: {
                crossfit_id: req.params.crossfit_id,
            },
        }
    )
        .then((updatedCrossfit) => {
            res.json(updatedCrossfit);
        })
        .catch((err) => {
            console.log(err);
            res.json(err);
        })
});

router.delete('/:id', (req, res) => {
    //delete by id
    res.send('made it to delete')
    Crossfit.destroy({
        where: {
            crossfit_id: req.params.crossfit_id,
        },
    })
        .then((deletedCrossfit) => {
            res.json(deletedCrossfit);
        })
        .catch((err) => {
            res.json(err);
        });
});

module.exports = router
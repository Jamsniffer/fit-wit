//import model here 
const router = require('express').Router();
const  Calisthenics = require('../../models');

router.get('/', async (req, res) => {
    //find all
    Calisthenics.findAll()
    .then((calisthenicsData) => {
        res.json(calisthenicsData);
    })
    .catch(err => {
        console.log('error/ calisthenics:', err)
        res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
    //find by id
    Calisthenics.findByPk(req.params.id)
    .then((calisthenicsData) => {
        res.json(calisthenicsData);
    })
    .catch(err => {
        console.log('error/ calisthenics:', err)
        res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
    //add to api
    Calisthenics.create(req.body)
        .then((newCalisthenics) => {
            res.json(newCalisthenics);
        })
        .catch((err) => {
            res.json(err);
        });
});

router.put('/:id', (req, res) => {
    //update by id
    Calisthenics.update(
        {
            // All the fields you can update and the data attached to the request body.
            name: req.body.name,
            description: req.body.description
        },
        {
            where: {
                calisthenics_id: req.params.calisthenics_id,
            },
        }
    )
        .then((updatedCalisthenics) => {
            res.json(updatedCalisthenics);
        })
        .catch((err) => {
            console.log(err);
            res.json(err);
        });
});

router.delete('/:id', (req, res) => {
    //delete by id
    res.send('made it to delete')
    Calisthenics.destroy({
        where: {
            calisthenics_id: req.params.calisthenics_id,
        },
    })
        .then((deletedCalisthenics) => {
            res.json(deletedCalisthenics);
        })
        .catch((err) => {
            res.json(err);
        });
});

module.exports = router
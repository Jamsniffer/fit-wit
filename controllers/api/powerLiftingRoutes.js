//import model here 
const router = require('express').Router();
const PowerLifting  = require('../../models');

router.get('/', async (req, res) => {
    //find all
    PowerLifting.findAll()
    .then((powerLiftingData) => {
        res.json(powerLiftingData)
    })
    .catch(err => {
        console.log('error/ powerLifting:', err)
        res.status(500).json(err);
    })
});

router.get('/:id', (req, res) => {
    //find by id
    PowerLifting.findByPk(req.params.id)
    .then((powerLiftingData) => {
        res.json(powerLiftingData)
    })
    .catch(err => {
        console.log('error/ powerLifting:', err)
        res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  //add to api
  PowerLifting.create(req.body)
    .then((newPowerLifting) => {
      res.json(newPowerLifting);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.put("/:id", (req, res) => {
  //update by id
  PowerLifting.update(
    {
      // All the fields you can update and the data attached to the request body.
      name: req.body.name,
      description: req.body.description,
    },
    {
      where: {
        powerLifting_id: req.params.powerLifting_id,
      },
    }
  )
    .then((updatedPowerLifting) => {
      res.json(updatedPowerLifting);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

router.delete("/:id", (req, res) => {
  //delete by id
  res.send("made it to delete");
  PowerLifting.destroy({
    where: {
      powerLifting_id: req.params.powerLifting_id,
    },
  })
    .then((deletedPowerLifting) => {
      res.json(deletedPowerLifting);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;

const router = require('express').Router();
const {Superhero} = require('../../models');

router.get('/', async (req, res) => {
    //find all
    Superhero.findAll()
      .then((SuperheroData) => {
        res.json(SuperheroData);
      })
      .catch((err) => {
        console.log("error/ superhero:", err);
        res.status(500).json(err);
      });
});

router.get('/:id', (req, res) => {
    //find by id
    Superhero.findByPk(req.params.id)
      .then((SuperheroData) => {
        res.json(SuperheroData);
      })
      .catch((err) => {
        console.log("error/ bodybuilding:", err);
        res.status(500).json(err);
      });
});

// router.post('/', (req, res) => {
//     //add to api
//     Superhero.create(req.body)
//       .then((newSuperhero) => {
//         res.json(newSuperhero);
//       })
//       .catch((err) => {
//         res.json(err);
//       });
// });

// router.put('/:id', (req, res) => {
//     //update by id
//     Superhero.update(
//       {
//         // All the fields you can update and the data attached to the request body.
//         name: req.body.name,
//         description: req.body.description,
//       },
//       {
//         where: {
//           superhero_id: req.params.superhero_id,
//         },
//       }
//     )
//       .then((updatedSuperhero) => {
//         res.json(updatedSuperhero);
//       })
//       .catch((err) => {
//         console.log(err);
//         res.json(err);
//       });
// });

// router.delete('/:id', (req, res) => {
//     //delete by id
//     res.send('made it to delete')
//     Superhero.destroy({
//       where: {
//         superhero_id: req.params.superhero_id,
//       },
//     })
//       .then((deletedSuperhero) => {
//         res.json(deletedSuperhero);
//       })
//       .catch((err) => {
//         res.json(err);
//       });
// });

module.exports = router
//import model here 
//const { x } = require(../../models)

const router = require('express').Router();

router.get('/', (req, res) => {
    //find all
    res.send('made it to get')
});

router.get('/:id', (req, res) => {
    //find by id
    res.send('made it to get by id')
});

router.post('/', (req, res) => {
   //add to api
   res.send('made it to post')
});

router.put('/:id', (req, res) => {
   //update by id
   res.send('made it to put')
});

router.delete('/:id', (req, res) => {
    //delete by id
    res.send('made it to delete')
});

module.exports = router
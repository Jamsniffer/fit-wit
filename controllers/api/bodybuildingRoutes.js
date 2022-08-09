//import model here 
const router = require('express').Router();
const { Bodybuilding } = require('../../models');

router.get('/', async (req, res) => {
    //find all
    res.status(200).json(bodybuildingdata)
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
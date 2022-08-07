const router = require('express').Router();
const templateRoutes = require('./template');
const postRoutes = 

router.use('/template', templateRoutes);

module.exports = router
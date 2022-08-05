const router = require('express').Router();
const templateRoutes = require('./template');

router.use('/template', templateRoutes);

module.exports = router
const router = require('express').Router();
const templateRoutes = require('./template');
// const postRoutes = 
// const el_html = template(context);

router.use('/template', templateRoutes);

module.exports = router
const router = require('express').Router();

// const authRoutes = require('./authroutes.js');
const apiRoutes = require('./api');
const homeRoutes = require('./homepage-routes.js');

router.use('/api', apiRoutes);
// router.use('/auth', authRoutes);
router.use('/', homeRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;

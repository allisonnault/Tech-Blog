const router = require('express').Router();
const homeRoute = require('./homeRoute');
const apiRoutes = require('./api');
const dashboardRoutes = require('./dashboard-routes');

router.use('/', homeRoute);
router.use('/api', apiRoutes);
router.use('/dashboard', dashboardRoutes);

module.exports = router;
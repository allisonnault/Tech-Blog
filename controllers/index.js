const router = require('express').Router();
const Post = require('../models/Post');
const homeRoute = require('./homeRoute');

router.use('/', homeRoute);

module.exports = router;
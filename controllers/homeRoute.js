const router = require('express').Router();
const Post = require('../models/Post');

router.get('/', async (req, res) => {
    try {
        const postList = await Post.findAll();
        const posts = postList.map(post => post.get({ plain: true }))
        console.log(posts);
        res.render('homepage', { posts })
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
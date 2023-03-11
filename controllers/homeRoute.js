const router = require('express').Router();
const { User, Comment, Post } = require('../models/');

router.get('/', async (req, res) => {
    try {
        const postList = await Post.findAll();
        const posts = postList.map(post => post.get({ plain: true }))
        console.log(posts);
        res.render('homepage', { posts, loggedIn: req.session.loggedIn });
    } catch (err) {
        res.status(500).json(err);
    }

});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('homepage')
})




module.exports = router;
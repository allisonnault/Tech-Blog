const router = require('express').Router();
const { User, Comment, Post } = require('../models');
const withAuth = require('../utils/auth');

//  */dashboard
router.get('/', withAuth, async (req, res) => {
   
    try {
        const userPost = await Post.findAll({
            where: {
                userId: req.session.userId,
            },
        });
        const posts = userPost.map((post) => post.get({ plain: true }));

        res.render('dashboard', { posts, loggedIn: req.session.loggedIn })
    } catch (err) {
        res.redirect('homepage');
    }
});


module.exports = router;

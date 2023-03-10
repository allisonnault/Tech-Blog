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

router.get('/:id', async (req, res) => {
    try {
        const editPost = await Post.findByPk(req.params.id);
        const post = editPost.dataValues;
        res.render('editPost', { post, loggedIn: req.session.loggedIn });   
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.put('/:id', (req, res) => {
    console.log(req.body);
    Post.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
    .then(post => res.json({ msg: 'updated succesfully' }))
    .catch(err => 
      res.status(400).json({ error: "unable to update" }));
  });

module.exports = router;

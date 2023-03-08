const router = require('express').Router();
const { User, Comment, Post } = require('../models');
const withAuth = require('../utils/auth');

//  */dashboard
router.get('/', withAuth, async (req, res) => {
   try {
    const userPost = await Post.findAll({
        where: {
            userId : req.session.userId,
        },
    });
    const posts = userPost.map((post) => post.get({ plain: true }));
    res.render('dashboard', { posts })
   } catch (err) {
    res.redirect('login');
   }
});
   
    // try {
    //     const userPosts = await User.findOne(req.params.id, {
    //         include: [{ model: Post },],
    //     });
    //     const user = userPosts.get({ plain: true });
    //     res.render('dashboard', { user, loggedIn: req.session.loggedIn });
    // } catch (err) {
    //     console.log(err);
    //     res.status(500).json(err);
    // }

module.exports = router;

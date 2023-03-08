const router = require('express').Router();
const { User, Comment, Post } = require('../models/');

router.get('/', async (req, res) => {
    try {
        const postList = await Post.findAll();
        const posts = postList.map(post => post.get({ plain: true }))
        res.render('homepage', { posts });
    } catch (err) {
        res.status(500).json(err);
    }

});

router.get('/login', (req, res) => {
    res.render('login')
})

// router.get('/user', async (req, res) => {
//     try {
//         console.log(req.body);
//         const userData = await User.findOne({
//             where: {
//                 username: Session.username
//             },
//         });
//         const user = userData.map((users)=> users.get({ plain: true }));
//         res.render('dashboard', { user });

//     } catch (err) {
//         res.status(500).json(err);
//     }
// });



module.exports = router;
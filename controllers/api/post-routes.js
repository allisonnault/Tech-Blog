const router = require('express').Router();
const { User, Comment, Post } = require('../../models');

//  * /api/posts
router.post('/', async (req, res) => {
  try {
    const newPost = await Post.create({
        title: req.body.title,
        body: req.body.postBody,
        user_id: req.session.userId
    });
    res.status(200).json(newPost);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
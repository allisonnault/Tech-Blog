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


router.get('/:id', async (req, res) => {
  try {
    const post = await Post.findOne({
      where: {
        id: req.params.id
      },
      include: [{
        model: Comment,
        required: true
      }]
    });
   const postData = {
    id: post.dataValues.id,
    title: post.dataValues.title,
    body: post.dataValues.body,
    userId: post.dataValues.userId,
    comments: post.dataValues.comments
   }
   console.log(postData);
    res.render('post', { postData, loggedin: req.session.loggedIn });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.delete('/:id', (req, res) => {
  Post.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(data => res.json(data))
  .catch(err => res.status(500).json(err))
});

module.exports = router;
const router = require('express').Router();
const { User, Comment, Post } = require('../../models');

// * /api/comments
router.post('/', async (req, res) => {
    try {
        const newComment = await Comment.create({
            body: req.body.comment,
            postId: req.body.id,
            userId: req.session.userId
        });
        res.status(200).json(newComment);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


module.exports = router;
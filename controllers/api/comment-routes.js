const router = require('express').Router();
const { User, Comment, Post } = require('../../models');

// * /api/comments
router.post('/', async (req, res) => {
    try {
        console.log(req.body);
        const newComment = await Comment.create({
            body: req.body.body,
        });
        res.status(200).json(newComment);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;
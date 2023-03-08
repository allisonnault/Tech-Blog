const router = require('express').Router();
const { User, Comment, Post } = require('../../models');

// * /api/users

// new user
router.post('/', async (req, res) => {
    try {
        const userData = await User.create(req.body);

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.status(200).json(userData);
        });
    } catch (err) {
        res.status(400).json(err)
    }
})
// login
router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({
            where: {
                username: req.body.username
            }
        });
        if (!user) {
            res
                .status(400)
                .json({ message: "Incorrect username or password, please try again " });
            return;
        }
        console.log(user.username);
        // const validPassword = user.checkPassword(req.body.password);

        // if (!validPassword) {
        //     console.log("invalid password");
        //     res.status(400).json({ message: 'No user account found!' });
        //     return;
        // }
        req.session.save(() => {
            req.session.userId = user.id;
            req.session.username = user.username;
            req.session.loggedIn = true;

            res.json({ user, message: 'You are now logged in!' });
        });
    } catch (err) {
        res.status(400).json(err);
    }
})

module.exports = router;
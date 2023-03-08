const sequelize = require('../config/config');
const postList = require('./post.json');
const userList = require('./users.json')
const { User, Comment, Post } = require('../models/');

sequelize.sync({ force: true }).then(data => {
    Post.bulkCreate(postList)
    .then(data => {
        console.log("Post data seeded");
    }),
    User.bulkCreate(userList)
    .then(data => {
        console.log("User data seeded");
    })
}) 
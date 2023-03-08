const sequelize = require('../config/config');
const postList = require('./post.json');
const userList = require('./users.json')
const { User, Comment, Post } = require('../models/');

sequelize.sync({ force: true }).then(data => {
    User.bulkCreate(userList)
    .then(data => {
        console.log("User data seeded");
    }),
    Post.bulkCreate(postList)
    .then(data => {
        console.log("Post data seeded");
    })
}) 
const sequelize = require('../config/config');
const postList = require('./post.json');
const userList = require('./users.json');
const commentList = require('./comments.json');
const { User, Comment, Post } = require('../models/');

sequelize.sync({ force: true }).then(data => {
    User.bulkCreate(userList, {individualHooks: true})
    .then(data => {
        console.log("User data seeded");
        Post.bulkCreate(postList)
        .then(data => {
            console.log("Post data seeded");
            Comment.bulkCreate(commentList)
            .then(data => {
                console.log("comment data seeded");
            })
        })
    })

}) 
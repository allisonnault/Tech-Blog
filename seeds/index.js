const sequelize = require('../config/config');
const postList = require('./post.json');
const Post = require('../models/Post');

sequelize.sync({ force: true }).then(data => {
    Post.bulkCreate(postList)
    .then(data => {
        console.log("Post data seeded");
    })
})
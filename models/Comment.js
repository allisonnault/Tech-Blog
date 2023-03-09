const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class Comment extends Model {}

Comment.init(
  {
    body: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // postId: {
    //   type: DataTypes.INTEGER
    // },
    // userId: {
    //   type: DataTypes.INTEGER
    // }
  },
  {
    sequelize,
    modelName: 'comment',
  }
);

module.exports = Comment;

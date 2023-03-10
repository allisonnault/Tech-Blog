DROP DATABASE IF EXISTS tech_blog_db;

CREATE DATABASE tech_blog_db;




SELECT * , users.username AS user FROM post JOIN users ON post.user_id = users.id

SELECT username FROM users WHERE post.user_id = users.id AS user
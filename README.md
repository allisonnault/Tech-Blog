# Tech-Blog
Challenge 14: Model-View-Controller (MVC)

[deployed application](https://mighty-spire-24724.herokuapp.com/)


## Description
    
I created a CMA_style blog site, where users can publish their blog psots and coment on other users posts as well. This application follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

![login/signup screen](./images/Screenshot%202023-03-11%20at%206.41.53%20PM.png)

![dashboard view](./images/Screenshot%202023-03-11%20at%206.43.24%20PM.png)

![edit post view](./images/Screenshot%202023-03-11%20at%206.43.33%20PM.png)

![homepage view](./images/Screenshot%202023-03-11%20at%206.43.48%20PM.png)

![post detial view](./images/Screenshot%202023-03-11%20at%206.44.10%20PM.png)
    
## Table of Contents
    
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#how-to-contribute)
- [Tests](#tests)
- [Questions](#questions)
    
    
<a name="installation"></a>
## Installation
    
How to install dependancies: run 'npm i' to install the packages

<a name="usage"></a>
## Usage
    
Use the login credentials to test:
username: guest
password: password

GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments
    

<a name="license"></a>
## License
            
This repo has the MIT license.
    

<a name="how-to-contribute"></a>
## How to Contribute
    
Contributor Covenant v2.1
    

<a name="tests"></a>
## Tests
    
NA


<a name="questions"></a>
## Questions
    
For questions check out my GitHub profile [allisonnault](https://www.github.com/allisonnault)

Or you can email me at [allisonrnault@gmail.com](mailto:allisonrnault@gmail.com)
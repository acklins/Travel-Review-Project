# Travel Review App

## Heroku Link
[Heroku Site](https://darius-travel.herokuapp.com/)

## Project Description

Our project is a Travel Review Site. This is an app that users can log into their account and browse through various travel destinations while reading reviews from other users. They can check out various pictures from the destination, the current weather, and leave a review from any place they have visited. They can also favorite destinations that will be saved to their favorites page so they can come back and revisit them later, either for fun or to leave a review once they have gone and visited that place themselves.

### Instructions

* Fork and Clone this repo
* Run `npm install` to install all dependencies
* Run `echo "SESSION_SECRET=yoursecrethere" >> .env` to create a .env file with your secret
* Create your database by running `createdb traveldb`
* Run `sequelize db:migrate` and `sequelize db:seed:all` to create your models and seed your database

### Technologies Used

* Express
* Node
* PostgreSQL
* HTML
* CSS/Sass
* JavaScript
* Escalidraw
* AdobeXD
* Postman
* EJS
* Heroku

## Screenshots

<img src ="https://i.imgur.com/FV1XiXwm.png">
<img src ="https://i.imgur.com/dBiAdubm.png">
<img src ="https://i.imgur.com/vAUl0wzm.png">
<img src ="https://i.imgur.com/8UpoDZam.png">
<img src ="https://i.imgur.com/GKktA0Cm.png">
<img src ="https://i.imgur.com/SVBIOg5m.png">
<img src ="https://i.imgur.com/WzvPCUkm.png">
<img src ="https://i.imgur.com/nInSMNPm.png">

## Wireframes

<img src ="https://i.imgur.com/046lKiRm.png">
<img src ="https://i.imgur.com/QoPl8kPm.png">
<img src ="https://i.imgur.com/xRAt3o4m.png">
<img src ="https://i.imgur.com/i6zO8wjm.png">
<img src ="https://i.imgur.com/r1El8Anm.png">
<img src ="https://i.imgur.com/KgkrFxqm.png">

### User Stories

* As a user, I want to be able to sign up when I open the site, and then be able to keep logging in afterwards.
* As a user, I want to be able to easily sift through the cities available by having it displayed in a drop down menu.
* As a user, I would like to see and be able to add, edit, and delete my own reviews.
* As a user, I want to be able to navigate back to the dashboard or logout from any page on the site.

### Unsolved Problems/Major Hurdles

* A difficult to navigate API that ended up being more complicated than just creating a seed file. Though it took an extra evening to get done, it was the right decision to make for this application.
* Conflicts in CSS and SCSS files that caused duplicate navigation bars and picture errors.
* We had to change our MVP to adjust for a change in feasible goals, including omitting a favorites feature and model, search feature, and a home destination page with all destinations displayed.
* We unfortunately were unable to reach our stretch goals as well which included, oauth with Google Passport, music in the background, and adding weather information about the destinations.
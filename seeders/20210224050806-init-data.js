'use strict';
const bcrypt = require('bcrypt');
const { query } = require('express');
const db = require('../models')

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await db.sequelize.sync({force: true});
    console.log('All models synced');

    await queryInterface.bulkDelete('destinations', null, {
      truncate: true,
      cascade: true,
      restartIdentity: true
    })
    
    const bulkDestinations = await queryInterface.bulkInsert('destinations', [
      {
        city: 'Amsterdam',
        country: 'Netherlands',
        image: 'https://i.imgur.com/jGvvrSrb.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        city: 'Athens',
        country: 'Greece',
        image: 'https://i.imgur.com/yqhd3OFb.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },  {
        city: 'Berlin',
        country: 'Germany',
        image: 'https://i.imgur.com/7Nx7L5Tb.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },  {
        city: 'Budapest',
        country: 'Hungary',
        image: 'https://i.imgur.com/TfTm6aWb.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },  {
        city: 'Cairo',
        country: 'Eqypt',
        image: 'https://i.imgur.com/rHnFRJob.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },  {
        city: 'Copenhagen',
        country: 'Denmark',
        image: 'https://i.imgur.com/nJfF0oUb.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },  {
        city: 'Istanbul',
        country: 'Turkey',
        image: 'https://i.imgur.com/ULuQanfb.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },  {
        city: 'London',
        country: 'England',
        image: 'https://i.imgur.com/adbtq81b.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },  {
        city: 'Madrid',
        country: 'Spain',
        image: 'https://i.imgur.com/fvH0Bmib.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },  {
        city: 'Montreal',
        country: 'Canada',
        image: 'https://i.imgur.com/eAQdsi6b.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },  {
        city: 'Oslo',
        country: 'Norway',
        image: 'https://i.imgur.com/K7hq70jb.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },  {
        city: 'Paris',
        country: 'France',
        image: 'https://i.imgur.com/45l92dtb.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },  {
        city: 'Rio de Janeiro',
        country: 'Brazil',
        image: 'https://i.imgur.com/diaGEDyb.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },  {
        city: 'Rome',
        country: 'Italy',
        image: 'https://i.imgur.com/uJkNiFEb.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },  {
        city: 'Seoul',
        country: 'South Korea',
        image: 'https://i.imgur.com/BTGWRebb.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },  {
        city: 'Sydney',
        country: 'Australia',
        image: 'https://i.imgur.com/JMc9iIZb.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },  {
        city: 'Tel Aviv',
        country: 'Israel',
        image: 'https://i.imgur.com/0Tbur7bb.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },  {
        city: 'Tokyo',
        country: 'Japan',
        image: 'https://i.imgur.com/mBXXWw0b.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },  {
        city: 'Vienna',
        country: 'Austria',
        image: 'https://i.imgur.com/s8HJ2Gwb.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },  {
        city: 'Warsaw',
        country: 'Poland',
        image: 'https://i.imgur.com/vpxImv0b.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {returning: true})
    console.log('bulk insert: ', bulkDestinations)

    await queryInterface.bulkDelete('users', null, {
      truncate: true,
      cascade: true,
      restartIdentity: true
    })

    const bulkUsers = await queryInterface.bulkInsert('users', [
      {
        email: 'della@example.com',
        name: 'Della',
        password: bcrypt.hashSync('password', 12),
        createdAt: new Date(),
        updatedAt: new Date()
      },  {
        email: 'darius@example.com',
        name: 'Darius',
        password: bcrypt.hashSync('password', 12),
        createdAt: new Date(),
        updatedAt: new Date()
      },  {
        email: 'caroline@example.com',
        name: 'Caroline',
        password: bcrypt.hashSync('password', 12),
        createdAt: new Date(),
        updatedAt: new Date()
      },  {
        email: 'michael@example.com',
        name: 'Michael',
        password: bcrypt.hashSync('password', 12),
        createdAt: new Date(),
        updatedAt: new Date()
      },  {
        email: 'brock@example.com',
        name: 'Brock',
        password: bcrypt.hashSync('password', 12),
        createdAt: new Date(),
        updatedAt: new Date()
      },  {
        email: 'ashley@example.com',
        name: 'Ashley',
        password: bcrypt.hashSync('password', 12),
        createdAt: new Date(),
        updatedAt: new Date()
      },  {
        email: 'mario@example.com',
        name: 'Mario',
        password: bcrypt.hashSync('password', 12),
        createdAt: new Date(),
        updatedAt: new Date()
      },  {
        email: 'alex@example.com',
        name: 'Alex',
        password: bcrypt.hashSync('password', 12),
        createdAt: new Date(),
        updatedAt: new Date()
      },  {
        email: 'zach@example.com',
        name: 'Zach',
        password: bcrypt.hashSync('password', 12),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {returning: true})
    console.log('bulk insert: ', bulkUsers)

    await queryInterface.bulkDelete('reviews', null, {
      truncate: true,
      cascade: true,
      restartIdentity: true
    })

    const bulkReviews = await queryInterface.bulkInsert('reviews', [
      {
        userId: bulkUsers[0].id,
        destinationId: bulkDestinations[0].id,
        content: "What's not to like about Amsterdam?",
        createdAt: new Date(),
        updatedAt: new Date()
      },  {
        userId: bulkUsers[1].id,
        destinationId: bulkDestinations[1].id,
        content: "My inner Greek God is finally coming through.",
        createdAt: new Date(),
        updatedAt: new Date()
      },  {
        userId: bulkUsers[5].id,
        destinationId: bulkDestinations[2].id,
        content: "Wait, wasn't there a wall here?",
        createdAt: new Date(),
        updatedAt: new Date()
      },  {
        userId: bulkUsers[3].id,
        destinationId: bulkDestinations[3].id,
        content: "For a city in a country named Hungary, the food was only fair.",
        createdAt: new Date(),
        updatedAt: new Date()
      },  {
        userId: bulkUsers[8].id,
        destinationId: bulkDestinations[4].id,
        content: "I thought the pyramids would be bigger.",
        createdAt: new Date(),
        updatedAt: new Date()
      },  {
        userId: bulkUsers[6].id,
        destinationId: bulkDestinations[5].id,
        content: "I thought it was supposed to be colorful? Maybe it's just my colorblindness.",
        createdAt: new Date(),
        updatedAt: new Date()
      },  {
        userId: bulkUsers[2].id,
        destinationId: bulkDestinations[6].id,
        content: "Where are all the turkeys?",
        createdAt: new Date(),
        updatedAt: new Date()
      },  {
        userId: bulkUsers[4].id,
        destinationId: bulkDestinations[7].id,
        content: "Big Ben was cool but they wouldn't let me into Parliament so I guess it was ok.",
        createdAt: new Date(),
        updatedAt: new Date()
      },  {
        userId: bulkUsers[5].id,
        destinationId: bulkDestinations[8].id,
        content: "I never wanted to leave, I've never felt more at home.",
        createdAt: new Date(),
        updatedAt: new Date()
      },  {
        userId: bulkUsers[4].id,
        destinationId: bulkDestinations[9].id,
        content: "Not quite home but it's Canada ey.",
        createdAt: new Date(),
        updatedAt: new Date()
      },  {
        userId: bulkUsers[1].id,
        destinationId: bulkDestinations[10].id,
        content: "Beautiful and modern, can't wait to go back!",
        createdAt: new Date(),
        updatedAt: new Date()
      },  {
        userId: bulkUsers[8].id,
        destinationId: bulkDestinations[11].id,
        content: "They kicked me out of the Louvre for trying to climb the pyramid. I just wanted to see the rest of the city!",
        createdAt: new Date(),
        updatedAt: new Date()
      },  {
        userId: bulkUsers[6].id,
        destinationId: bulkDestinations[12].id,
        content: "A wonderful and spiritual trip, but not quite what I was expecting after that Fast and Furious movie",
        createdAt: new Date(),
        updatedAt: new Date()
      },  {
        userId: bulkUsers[7].id,
        destinationId: bulkDestinations[13].id,
        content: "I mean, when in Rome...",
        createdAt: new Date(),
        updatedAt: new Date()
      },  {
        userId: bulkUsers[3].id,
        destinationId: bulkDestinations[14].id,
        content: "I thought it would have more soul given the name.",
        createdAt: new Date(),
        updatedAt: new Date()
      },  {
        userId: bulkUsers[6].id,
        destinationId: bulkDestinations[15].id,
        content: "I couldn't find 42 Wallaby Way.",
        createdAt: new Date(),
        updatedAt: new Date()
      },  {
        userId: bulkUsers[8].id,
        destinationId: bulkDestinations[16].id,
        content: "Can I move here just to get my vaccine now?",
        createdAt: new Date(),
        updatedAt: new Date()
      },  {
        userId: bulkUsers[5].id,
        destinationId: bulkDestinations[17].id,
        content: "Sushi, straight from the origin. Now that's fresh.",
        createdAt: new Date(),
        updatedAt: new Date()
      },  {
        userId: bulkUsers[2].id,
        destinationId: bulkDestinations[18].id,
        content: "Where do they make the sausages?",
        createdAt: new Date(),
        updatedAt: new Date()
      },  {
        userId: bulkUsers[1].id,
        destinationId: bulkDestinations[19].id,
        content: "Honestly, I don't really know what to say so, yeah.",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {returning: true})
    console.log('bulk insert: ', bulkReviews)
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

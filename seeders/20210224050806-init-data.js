'use strict';
const bcrypt = require('bcrypt')
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

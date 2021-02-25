const express = require('express');
const axios = require('axios')
const app = express()


axios.get('https://api.teleport.org/api/cities/?search=rome')
    .then((responseData) => {
        let data = responseData.data._embedded['city:search-results'][0]
        let geoid = data._links['city:item'].href
        // console.log(geoid)
        axios.get(geoid)
        .then((responseData) => {
            let specData = responseData.data
            console.log(specData)
        })
    })
    .catch((error) => {
        console.log(error)
    })
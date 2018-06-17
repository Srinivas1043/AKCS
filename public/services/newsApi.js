require("dotenv").config();
const axios = require('axios');

module.exports = function fetchNews() {
    const newsApi = process.env.NEWS_API;
    const newsApiKey = process.env.NEWS_API_KEY;
    const newsUrl = newsApi+'&apiKey='+newsApiKey;

    return axios.get(newsUrl)
      .then(function(result) {
          return result.data.articles;
      })
      .catch(function(error){
          console.log('error --- ', error);
      });
};
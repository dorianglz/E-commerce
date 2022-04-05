// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}

/**
 * 
 *  API SNEAKERS
 * 
 * const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://v1-sneakers.p.rapidapi.com/v1/sneakers',
  params: {limit: '10'},
  headers: {
    'X-RapidAPI-Host': 'v1-sneakers.p.rapidapi.com',
    'X-RapidAPI-Key': '76c50f9cacmsha755bad15080406p16c4bejsnbd601e1a346b'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
 * 
 */
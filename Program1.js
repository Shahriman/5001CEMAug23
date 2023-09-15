//Update by Shahriman on 15 Sept 2023, at 3.40pm.
//I want to go back at 5

const axios = require('axios');
const apikey = '869744ce';
const title = 'the Avengers';

const querystr = `http://www.omdbapi.com/?t=${title}&apikey=${apikey}`;

axios.get(querystr).then( (response) =>{
console.log(response.data.Title);
console.log(response.data.Year);
console.log(response.data.Director);

}
);
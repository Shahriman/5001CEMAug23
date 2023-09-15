const axios = require('axios');

const apikey = '07f6e6e630b44d4bac8d9bdcd61e11bf';
const news = 'Joss Wheton';

const querystr1 = `https://newsapi.org/v2/everything?q=${news}&apiKey=${apikey}`;

axios.get(querystr1).then( (response) =>{
console.log(response.data.articles[0].source.name);
console.log(response.data.articles[0].author);
console.log(response.data.articles[0].title);
}
);
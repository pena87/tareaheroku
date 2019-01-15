const enviroment = process.env.NODE_ENV || 'development';
//console.log(enviroment);
const config = require('../knexfile.js')[enviroment];
console.log(config);
module.exports = require('knex')(config);

//https://www.youtube.com/watch?v=WYa47JkZh_U
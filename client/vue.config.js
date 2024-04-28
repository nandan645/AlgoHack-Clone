const path = require('path');
const variable=require('dotenv').config({path: '../.env'});
module.exports = {
  outputDir: path.resolve(__dirname, '../server/public'),
  devServer: {
    proxy: {
      '/api':{
        //  target: variable.parsed.BASE_URL
         target:"http://localhost:5000/"
      }
    }
  }
};

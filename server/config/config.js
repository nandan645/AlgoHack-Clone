var environments = {};

const variable=require('dotenv').config({path: '.env'});
console.log(variable)
var dev = {
  "envName": "Development",
  "port": 5000,
  "db_connectionString": {
    "db": "mongodb+srv://tempUser:eLEnwp6smFOUgDKN@algohack.ckxo1hi.mongodb.net/test"
  },
  "mail":{
    "user":"acmwchapter@students.iitmandi.ac.in",
    "pass":"enpu cdhk etah aurw"
  }
};
var prod = {
  "envName": "Production",
  "port": 5000,
  "db_connectionString": {
    "db": "mongodb+srv://tempUser:eLEnwp6smFOUgDKN@algohack.ckxo1hi.mongodb.net/test"
  },
  "mail":{
    "user":"acmwchapter@students.iitmandi.ac.in",
    "pass":"enpu cdhk etah aurw"
  }
};
// Staging (default) environment
function toExport(path){
environments.staging = { ...dev };

// Production environment
environments.production = { ...prod };
// Determine which environment was passed as a command-line argument
var currentEnvironment =path
// Check that the current environment is one of the environments above, if not default to staging
var environmentToExport =
  typeof environments[currentEnvironment] == "object"
    ? environments[currentEnvironment]
    : environments.production;
    return environmentToExport;
}
// Export the module
module.exports = toExport;

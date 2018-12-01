const Twitter = require('twitter');

// normally we'd use env variables here
const client = new Twitter({
  consumer_key: "9UEJhJe5F3F4WRD5xHxLAToab",
  consumer_secret: "DM0GyMhCBy0WlzexGGwrCxOL2ZDppIFBYXz4I8FXvKuQ2zjOmX",
  access_token_key: "1068356140927377409-PhgULPZsTiKJye1GcZJXEPUP5V1TDi",
  access_token_secret: "GJ741fgVhFFpzlveGlP8uqabnmAvRrGvnEZvGEPekHIHi",
  request_options: {
    proxy: "https://cors-anywhere.herokuapp.com/"
  }
});
export default client;
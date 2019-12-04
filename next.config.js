require('dotenv').config();
module.exports = {
  webpack: (config, options) => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    };

    return config;
  },
  env: {
    // Reference a variable that was defined in the .env file and make it available at Build Time
    ALPHA_API_KEY: process.env.ALPHA_API_KEY,
    ALPHA_API_ENDPOINT: process.env.ALPHA_API_ENDPOINT
  }
};

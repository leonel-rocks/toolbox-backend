const dotenv = require("dotenv");

dotenv.config({ path: ".env" });

module.exports = {
  development: {
    corsWhitelist: process.env.CORS_WHITELIST?.split(","),
    tbxApiUrl: process.env.TBX_API_URL,
    tbxToken: process.env.TBX_TOKEN,
  },
};

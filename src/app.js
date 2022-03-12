const settings = require("./config/settings");

class App {
  constructor() {
    this.environment = process.env.NODE_ENV;
    this.settings = settings[this.environment];
    this.tbxApiUrl = this.settings.tbxApiUrl;
    this.tbxToken = this.settings.tbxToken;
  }
}

module.exports = { App };

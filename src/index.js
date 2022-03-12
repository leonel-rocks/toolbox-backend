const express = require("express");
const cors = require("cors");
const settings = require("./config/settings");

/**
 * Basic settings
 */
const environment = process.env.NODE_ENV;
const corsWhitelist = settings[environment].corsWhitelist;

/**
 * CORS Settings
 */
const corsOptions = {
  origin: corsWhitelist,
};

/**
 * Controllers
 */
const apiController = require("./controllers/api");

/**
 * Express server
 */
const app = express();

/**
 * Express configuration
 */
app.set("port", process.env.PORT);
app.set("env", environment);
app.use(cors(corsOptions));

/**
 * API routes
 */
app.get("/files/data", apiController.files);

/**
 * Start Express server.
 */
const server = app.listen(app.get("port"), () => {
  console.log(
    "Server is running at http://localhost:%d in %s mode",
    app.get("port"),
    app.get("env")
  );
  console.log("  Press CTRL-C to stop\n");
});

module.exports = server;

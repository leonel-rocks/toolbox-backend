const axios = require("axios");
const { app } = require("../instances");

module.exports = class TbxService {
  static files = async () => {
    return await axios.get(`${app.tbxApiUrl}/secret/files`, {
      headers: {
        Authorization: `Bearer ${app.tbxToken}`,
      },
    });
  };

  static file = async (fileName) => {
    const test = await axios.get(`${app.tbxApiUrl}/secret/file/${fileName}`, {
      headers: {
        Authorization: `Bearer ${app.tbxToken}`,
      },
    });
    return test;
  };
};

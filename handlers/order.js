require("dotenv").config();
const axios = require("axios");

const API_URL = process.env.API_URL;

const sendDataToSheet = async (data) => {
  const url = API_URL;
  const resp = await axios({
    url,
    method: "POST",
    data: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  });
  if (resp.data.result === "success") {
    return resp;
  } else {
    return { error: "Form Submission Failed." };
  }
};

module.exports = sendDataToSheet;

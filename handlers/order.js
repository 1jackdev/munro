const axios = require("axios");

const API_URL =
  "https://script.google.com/macros/s/AKfycbwxX38XSg4vDjQQmjU6RclynxM9fU1rVVN9s2HoFxmXXW3RG3vLXP4jSIPcIlFY-Y92/exec";

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

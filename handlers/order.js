const axios = require("axios");

const API_URL =
  "https://script.google.com/macros/s/AKfycbxspBQoe-6egXDGHqMq-h8dTw-UcAFmnE5L7760n64TlpvGdWIz_kbjZY8HEdhsmXoI/exec";

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

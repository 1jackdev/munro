import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

const sendDataToSheet = async (data) => {
  const url = `${BASE_URL}/order`;
  const resp = await axios({
    url,
    method: "POST",
    data,
    headers: { "Content-Type": "application/json" },
  });
  return resp;
};

export default sendDataToSheet;

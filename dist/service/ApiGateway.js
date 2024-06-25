const axios = require("axios");
const baseUrl = "http://localhost:8080";
axios.defaults.baseUrl = baseUrl;
axios.defaults.headers.common["Accept"] = "application/json";
axios.defaults.headers.common["Content-Type"] = "application/json";
module.exports = axios;
//# sourceMappingURL=ApiGateway.js.map
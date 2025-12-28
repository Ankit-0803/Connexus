const isLocalhost =
  window.location.hostname === "localhost" ||
  window.location.hostname === "127.0.0.1";

const API_BASE =
  process.env.REACT_APP_API ||
  (isLocalhost
    ? "http://localhost:7890/"
    : "https://connexus-z34u.onrender.com/");

const WS_BASE =
  isLocalhost
    ? "ws://localhost:7890/"
    : "wss://connexus-z34u.onrender.com/";

const ServerUrl = {
  BASE_URL: API_BASE,
  WS_BASE_URL: WS_BASE
};

export default ServerUrl;

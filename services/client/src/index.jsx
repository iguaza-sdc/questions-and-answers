import "./qa.css";
import "./ratings.css";
import "./related.css";
import "./styles.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./components/App";
import ScrollToTop from "./components/ScrollToTop";
import axios from "axios";
import dateFormatter from "./components/QA/dateFormatter";

const handleClickTrackingUserInteractions = (postBody) => {
  axios
    .post(process.env.REACT_APP_QA_API_URL, postBody)
    .catch((err) => console.error(err));
};

ReactDOM.render(
  <Router>
    <ScrollToTop />
    <App />
  </Router>,
  document.getElementById("app")
);


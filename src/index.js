import React from "react";
import ReactDOM from "react-dom";
import RhythmBeadsApp from "./App";

ReactDOM.render(<RhythmBeadsApp />, document.getElementById("root"));

// Register Service Worker
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/service-worker.js")
      .then(reg => console.log("Service Worker registered", reg))
      .catch(err => console.log("Service Worker not registered", err));
  });
}

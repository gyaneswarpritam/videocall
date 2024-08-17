/* eslint-disable no-restricted-globals */
import React from "react";
import ReactDOM from "react-dom";
import ZoomVideo from "@zoom/videosdk";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ZoomContext from "./context/zoom-context";
import axios from "axios";

const initializeApp = async () => {
  let meetingArgsUrl: any = Object.fromEntries(
    new URLSearchParams(location.search)
  );
  let meetingArgs: any;
  try {
    const response = await axios.post<{ token: string }>(
      "https://zoom-test-zeta.vercel.app/generateToken",
      {
        topic: meetingArgsUrl?.topic,
      }
    );
    const signature = response.data.token;
    meetingArgs = {
      topic: meetingArgsUrl?.topic || "",
      name: meetingArgsUrl?.name || "",
      password: "",
      signature: signature,
      sessionKey: "",
      userIdentity: "",
      role: 1,
    };
  } catch (error) {
    console.error("Error fetching signature:", error);
    return; // Exit function if there's an error
  }

  const zmClient = ZoomVideo.createClient();
  ReactDOM.render(
    <React.StrictMode>
      <ZoomContext.Provider value={zmClient}>
        <App meetingArgs={meetingArgs} />
      </ZoomContext.Provider>
    </React.StrictMode>,
    document.getElementById("root")
  );

  reportWebVitals();
};

initializeApp();

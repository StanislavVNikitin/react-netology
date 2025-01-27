import React, {useState} from "react";
import ReactDOM from "react-dom/client";
import Calendar from "./components/Calendar"
import moment from "moment/moment";

const root = ReactDOM.createRoot(document.getElementById('root'));
const selectDate = new Date("2015-09-10");

root.render(
    <React.StrictMode>
        <Calendar selectDate={selectDate}/>
    </React.StrictMode>
);

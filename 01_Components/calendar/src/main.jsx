import React from "react";
import ReactDOM from "react-dom/client";
import Calendar from "./components/Calendar"

const root = ReactDOM.createRoot(document.getElementById('root'));
const selectDate = new Date("2008-06-19");

root.render(
    <React.StrictMode>
        <Calendar selectDate={selectDate}/>
    </React.StrictMode>
);

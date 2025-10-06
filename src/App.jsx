import React from "react";
import Header from "./components/header";
import EventDetails from "./components/event-details-Section";
import Schedule from "./components/schedule-Section";
import Footer from "./components/footer";

function App(){
    return(
        <div className="app-container">
            <Header />
            <EventDetails />
            <Schedule />
            <Footer />
        </div>
    )
}

export default App;
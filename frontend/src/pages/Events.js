import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEvents } from "../hooks/useEvents";
import one from "../img/1.jpg";
import two from "../img/2.jpg";
import three from "../img/3.jpg";
const Events = () => {
  const { events } = useEvents();
  const handleClickScroll = (event) => {
    const element = document.getElementById(event.target.name);
    console.log(event.target.name);
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="eventPageContainer">
      <h1 id="h3">ALL EVENTS</h1>

      <div className="eventsContainer">
        <div className="event">
          <Link
            to="/student/events"
            id="eventLink1"
            name="content1"
            onClick={handleClickScroll}
          >
            {" "}
            Event 1{" "}
          </Link>
        </div>
        <div className="event">
          <Link
            to="/student/events"
            id="eventLink2"
            name="content2"
            onClick={handleClickScroll}
          >
            {" "}
            Event 2{" "}
          </Link>
        </div>
        <div className="event">
          <Link
            to="/student/events"
            id="eventLink3"
            name="content3"
            onClick={handleClickScroll}
          >
            {" "}
            Event 3{" "}
          </Link>
        </div>
        <div className="event">
          <Link
            to="/student/events"
            id="eventLink4"
            name="content4"
            onClick={handleClickScroll}
          >
            {" "}
            Event 4{" "}
          </Link>
        </div>
      </div>
      <div className="eventContent" id="content1">
        <div className="eventHeader">Antalya Winter Camp 2023</div>
        <div className="eventContent2">
          The Football Association of Ireland runs skills-based summer camps at
          many soccer clubs throughout the country during the summer period.
        </div>

        <div className="eventImage">
          <img src={one} alt="" />
        </div>
      </div>
      <div className="eventContent" id="content2">
        <div className="eventHeader">Antalya Winter Camp 2023</div>
        <div className="eventContent2">
          The Football Association of Ireland runs skills-based summer camps at
          many soccer clubs throughout the country during the summer period.
        </div>

        <div className="eventImage">
          <img src={two} alt="" />
        </div>
      </div>
      <div className="eventContent" id="content3">
        <div className="eventHeader">Antalya Winter Camp 2023</div>
        <div className="eventContent2">
          The Football Association of Ireland runs skills-based summer camps at
          many soccer clubs throughout the country during the summer period.
        </div>

        <div className="eventImage">
          <img src={three} alt="" />
        </div>
      </div>
      <div className="eventContent" id="content4">
        <div className="eventHeader">Antalya Winter Camp 2023</div>
        <div className="eventContent2">
          The Football Association of Ireland runs skills-based summer camps at
          many soccer clubs throughout the country during the summer period.
        </div>

        <div className="eventImage">
          <img src={one} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Events;

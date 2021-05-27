import React from "react";
import "./greetingheader.css";

export default function Greetingheader(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="date">{props.date}</div>
        </div>
        <div className="col-sm-12">
          <div className="time">{props.time}</div>
        </div>
        <div className="col-sm-12">
          <div className="wish">Hello Supriya, {props.wish}</div>
        </div>
      </div>
    </div>
  );
}

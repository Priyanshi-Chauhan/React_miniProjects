import React, { Component } from "react";
const seasonConfig = {
  winter: {
    text: "burr ,it is chilly",
    iconName: "snowflake"
  },
  summer: {
    text: "let's hit the beach",
    iconName: "sun"
  }
};
const GetSeason = (lat, month) => {
  if (month > 3 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  }
  if (month < 3 && month > 9) {
    return lat < 0 ? "winter" : "summer";
  }
  const SeasonDisplay = props => {
    const season = GetSeason(props.lat, new Date.getMonth());

    const { text, iconName } = seasonConfig[season];

    return (
      <div>
        <i className={`${iconName} icon`}></i>
        <h4>{text}</h4>
        <i className={`${iconName} icon`}></i>
      </div>
    );
  };
  export default SeasonDisplay;
};

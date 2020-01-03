import React, { Component } from "react";
const ApprovalCard = props => {
  return (
    <div className="ui card">
      <div className="content"></div>
      <div className="extra content">
        <div className="ui two buttons">
          <div className=" ui basic green button">ACCEPT</div>
          <div className="ui basic red button">REJECT</div>
        </div>
      </div>
      {props.children}
    </div>
  );
};
export default ApprovalCard;

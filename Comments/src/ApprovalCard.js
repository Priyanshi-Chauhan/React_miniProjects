import React, { Component } from "react";
const ApprovalCard = props => {
  return (
    <div className="ui card">
      <div className="content">{props.children}</div>
      <div className="extra content">
        <div className="ui two buttons">
          <div className=" ui basic green button">ACCEPT</div>
          <div className="ui basic red button">REJECT</div>
        </div>
      </div>
    </div>
  );
};
export default ApprovalCard;

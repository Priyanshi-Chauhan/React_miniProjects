import React, { Component } from "react";
const SearchList = props => {
  const poo = props.yaya.map(yay => {
    return <img key={yay.id} src={yay.urls.regular} />;
  });
  return <div>{poo}</div>;
};
export default SearchList;

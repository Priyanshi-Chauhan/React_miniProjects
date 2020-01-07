import React, { Component } from "react";
class SearchBar extends React.Component {
  state = {
    term: ""
  };
  render() {
    return (
      <div className="ui segment">
        <form
          className="ui form"
          onSubmit={evt => ({ term: evt.preventDefault() })}
        >
          <div className="field">
            <label>image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={event => this.setState({ term: event.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}
//onClickEnter(evt) {
//evt.preventDefault();
//console.log(this.state.term);
//}
//}
// onInputChange(event) {
// console.log(event.target.value);
//}

export default SearchBar;

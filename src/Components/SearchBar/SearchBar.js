import React from "react";
import ReactDOM from "react-dom";
import "./SearchBar.css";

export class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.search = this.search.bind(this)
    this.handleTermChange = this.handleTermChange.bind(this);
  }

  search(term) {
    this.props.onSearch(term)
  }

  handleTermChange(event) {
    this.setState(event.target.value)
  }
  render() {
    return (
      <div className="SearchBar">
        <input placeholder="Enter A Song, Album, or Artist" 
          onChange={this.handleTermChange}
        />
        <button className="SearchButton" onClick={this.search}>
          SEARCH
        </button>
      </div>
    );
  }
}
import React, {Component} from 'react';


class SearchBar extends Component {

  handleUpdate = (event) => {


  }

  render() {
    return (
      <input type="text" className="form-search form-control"
      onChange={this.handleUpdate}/>
    );
  }
}

export default SearchBar;

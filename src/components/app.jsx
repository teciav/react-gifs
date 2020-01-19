import React, {Component} from 'react';
import giphy from 'giphy-api';

import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "3ohfFLRAGCn9SmmTD2"
    }
  }

  search = (query) => {
    giphy('SaNk0ffy0jbShh8ySS7t8eHwl1xJ7BWI').search({
      q: query,
      rating: 'g',
      limit: 12
    }, (err, result) => {
        this.setState({
          gifs: result.data
        });
    });

  }


  render() {
    const gifs = [
      { id: "RghNKwcH2IIBzm4h8z"},
      { id: "ehgd3ANQJbRmpA7GNJ"}
    ];

    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search}/>
          <div className="selected-gif"><Gif id={this.state.selectedGifId}/></div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs}/>
        </div>
      </div>
      );
  }
}

export default App;

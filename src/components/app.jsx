import React, {Component} from 'react';
import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "RghNKwcH2IIBzm4h8z"
    }
  }

  search = (query) => {

  }


  render() {
    const gifs = [
      { id: "RghNKwcH2IIBzm4h8z"},
      { id: "ehgd3ANQJbRmpA7GNJ"}
    ];

    return (
      <div>
        <div className="left-scene">
          <SearchBar />
          <div className="selected-gif"><Gif id="RghNKwcH2IIBzm4h8z"/></div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs}/>
        </div>
      </div>
      );
  }
}

export default App;

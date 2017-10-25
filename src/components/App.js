import React, {Component} from 'react';
import '../styles/App.css';
import {Grid, Button} from 'react-bootstrap';
import CamperTable from './CamperTable';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recent: [],
      alltime: [],
      showing: "recent"
    };

    this.switchBoard = this.switchBoard.bind(this);
  }
  //makes a XMLHttp request with the passed url and update the selecte state (type)
  ajaxReq(url, type) {
    const request = new XMLHttpRequest();
    request.open("GET", url);
    request.send();
    request.onload = () => {
      if (request.status >= 200 && request.status < 400) {
        let data = JSON.parse(request.responseText);

        this.setState({[type]: data});
      }
    };
  }

  //makes 2 ajax requests and stores the data in the state
  componentDidMount() {
    this.ajaxReq("https://fcctop100.herokuapp.com/api/fccusers/top/recent", "recent");
    this.ajaxReq("https://fcctop100.herokuapp.com/api/fccusers/top/alltime", "alltime");
  }

  // switches between recent and alltime boards
  switchBoard() {
    if (this.state.showing === "recent") {
      this.setState({showing: "alltime"});
    } else {
      this.setState({showing: "recent"});
    }
  }

  render() {
    return (
      <Grid>
        <h1 id="titleText">{`${this.state.showing === "recent"
            ? "Recent"
            : "Alltime"} Campers Leaderboard`}</h1>
        <Button id="switchButton" bsStyle="default" onClick={this.switchBoard}>
          Switch Leaderboard
        </Button>
        <CamperTable camplist={this.state[this.state.showing]}/>
      </Grid>
    );
  }
}

export default App;

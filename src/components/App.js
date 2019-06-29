import React, { Component } from 'react';
import '../App.css';
import StartContainer from '../containers/StartContainer';
import GameStageContainer from '../containers/GameStageContainer';

import { Grid } from '@material-ui/core'

class App extends Component {
  render() {
    return (
      <Grid>
        <StartContainer />

        <br /> <hr />
        <Grid>
          <GameStageContainer />
        </Grid>
      </Grid>
    );
  }
}

export default App;
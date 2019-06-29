import React, { Component } from 'react';
import Start from '../components/Start';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as startActions from '../store/modules/start';
import * as gameStageAction from '../store/modules/gameStage';

class StartContainer extends Component {

  componentDidMount() {
    const { StartActions } = this.props;

    return StartActions.makeNullCell();
  }

  _gameStart = () => {
    const { StartActions } = this.props;
    const { gaming } = this.props;

    if(!gaming) {
      alert('게임을 시작합니다.');
      return StartActions.startToggle();
    }
  }

  _replay = () => {
    const { StartActions, GameStageAction } = this.props;
    const { gaming } = this.props;

    if(gaming) {
      const question = window.confirm('게임을 새로 시작합니까?');

      if(question) {
        StartActions.startToggle();

        return setTimeout( () => {
          GameStageAction.replay()
        }, 0)
      }
    }
  }

  render() {
    const { _gameStart, _replay } = this;
    const { gaming, turn } = this.props;

    return (
      <Start
        gameStart={_gameStart}
        replay={_replay}
        gaming={gaming}
        turn={turn}
      />
    );
  }
}

export default connect(
  (state) => ({
    gaming: state.start.gaming,
    turn: state.gameStage.turn,
    replay: state.start.replay,
  }), 
  (dispatch) => ({
    StartActions: bindActionCreators(startActions, dispatch),
    GameStageAction: bindActionCreators(gameStageAction, dispatch)
  })
)(StartContainer);
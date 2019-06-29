import React, { Component } from 'react';
import Oneplayer from '../components/One_player';
import Twoplayer from '../components/Two_player';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import * as startActions from '../store/modules/start';
import * as gameStageAction from '../store/modules/gameStage';

class GameStageContainer extends Component {
  _click = (el, num, key) => {
    const { GameStageAction, turn, useArr, numCheck, winRule } = this.props;
    const use = useArr.includes(Number(el[Object.keys(el)].num));
    let check = turn ? '1' : '2'

    if(check !== num) {
      return alert('잘못된 차레입니다.')
    }

    if(use === false) {
      let body = { el : el, player : turn, cell : key, check : numCheck, rule : winRule}
      return GameStageAction.clickCell(body);

    } else {
      return alert('이미 선택한 부분입니다. ')
    }
  }

  render() {
    const { _makeCell, _click } = this
    const { gaming, turn, nullArr, playerCell, useArr } = this.props;

    return (
    <div className="grid">
      <div className='one'>
        <Oneplayer
          oneMakeCell={_makeCell}
          _click={_click}
          gaming={gaming}
          turn={turn}
          nullArr={nullArr}
          playerCell={playerCell}
          useArr={useArr}
          player='1'
        />,
      </div>

      <div className='two'>
        <Twoplayer
          gaming={gaming}
          turn={turn}
          nullArr={nullArr}
          playerCell={playerCell}
          _click={_click}
          useArr={useArr}
          player='2'
        />    
      </div>
    </div>
    );
  }
}

export default connect(
  (state) => ({
    gaming: state.start.gaming,
    turn: state.gameStage.turn,
    nullArr: state.start.nullArr,
    playerCell : state.start.playerCell,
    useArr : state.gameStage.useArr,
    numCheck : state.start.numCheck,
    winRule : state.start.winRule
  }), 
  (dispatch) => ({
    GameStageAction: bindActionCreators(gameStageAction, dispatch),
    // StartActions: bindActionCreators(startActions, dispatch)
  })
)(GameStageContainer);
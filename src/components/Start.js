import React from 'react';
import { Grid } from '@material-ui/core'

const Start = ({
  gaming,
  turn,
  gameStart,
  replay
}) => {
  return (
    <Grid style={{ textAlign : 'center' }}>
      <button onClick={!gaming ? () => gameStart() : () => replay()}> 
        {gaming === false ? '게임 시작' : '게임 재시작' }
      </button>
      
      <br /> <br />
      {gaming === true ?
        <b> {turn === true ? '1 플레이어의 차례입니다.' : '2 플레이어의 차례입니다.'} </b>
        : <b> 게임 시작을 눌러주세요! </b>
      } 
    </Grid>
  );
};

Start.defaultProps = {
  gaming: false,
  turn : false
}

export default Start;
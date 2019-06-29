import React from 'react';

const One_player = ({
  gaming,
  turn,
  nullArr,
  playerCell,
  _click,
  useArr,
  player
}) => {
  return (
    <div>
      <h3 style={gaming && turn ? {color : 'blue'} : {color : '#ababab'}}
          className='App'
      > 
        1 플레이어 
      </h3>
      <div style={{ display : 'grid', gridTemplateColumns : 'repeat(5, 20%)'}}>
        {nullArr !== null 
            ? nullArr.map( (el, key) => {
                return(
                    <div key={key} className='each_null' />
                  )
              }) 
            :
              playerCell[player].map( (el, key) => {
                return(
                  <div key={key + 1} className='each_null'
                        style={!useArr.includes(el[Object.keys(el)].num) && turn 
                                ? {backgroundColor : 'white'}
                                : useArr.includes(el[Object.keys(el)].num)
                                  ? {backgroundColor : '#5c7cfa'}
                                  : null
                        }

                  onClick={() => _click(el, player, key)}
                  >
                    <b> {el[Object.keys(el)].num} </b>
                    
                  </div>
              )
            })}
      </div>
    </div>
  );
};

One_player.defaultProps = {
  gaming: false,
  turn : false,
}

export default One_player;
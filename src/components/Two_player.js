import React from 'react';

const Two_player = ({
  gaming,
  turn,
  nullArr,
  playerCell,
  useArr,
  _click,
  player
}) => {
  return (
    <div>
      <h3 style={gaming && !turn ? {color : 'red'} : {color : '#ababab'}}
          className='App'
      > 
        2 플레이어 
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
                style={!useArr.includes(el[Object.keys(el)].num) && !turn 
                        ? {backgroundColor : 'white'}
                        : useArr.includes(el[Object.keys(el)].num)
                          ? {backgroundColor : '#ff6b6b'}
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

Two_player.defaultProps = {
  gaming: false,
}

export default Two_player;
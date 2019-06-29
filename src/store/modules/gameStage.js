import { createAction, handleActions } from 'redux-actions';

// Action
const CLICK_CELL = 'one_player/CLICK_CELL';
const REPLAY = 'start/REPLAY';
const CHECK_WIN = 'start/CHECK_WIN'

export const clickCell = createAction(CLICK_CELL);
export const replay = createAction(REPLAY);
export const checkWin = createAction(CHECK_WIN);

const initialState = {
  turn : true,
  useArr : [],
  bingoCheck : { '1' : [], '2': [] },
};

export default handleActions({
  [CLICK_CELL] : (state, body) => {
    const { turn, useArr, bingoCheck } = state;
    let cover = useArr;
    
    let bodys = body.payload
    let rule = bodys.rule
    let checkArr = bodys.check
    let cell = bodys.cell;

    let player = '1';
    let enermy = '2';

    if(!turn) {
      player = '2';
      enermy = '1';
    }

    let enermyNum = checkArr[enermy].indexOf(bodys.el[Object.keys(bodys.el)].num)

    let coverCheck = bingoCheck;
    coverCheck[player].push(cell)
    coverCheck[enermy].push(enermyNum + 1);
    cover.push(Number(bodys.el[Object.keys(bodys.el)].num));

    return { turn : !turn, useArr : cover, bingoCheck : coverCheck } 
  },

  [REPLAY] : () => {
    return { turn : true, useArr : [] }
  },
}, initialState);
import { createAction, handleActions } from 'redux-actions';

const START_TOGGLE = 'start/START_TOGGLE';
const MAKE_NULL_CELL = 'start/MAKE_NULL_CELL';
const CLICK_CELL = 'start/CLICK_CELL';

export const startToggle = createAction(START_TOGGLE);
export const makeNullCell = createAction(MAKE_NULL_CELL);
export const clickCell = createAction(CLICK_CELL);
// export const replay = createAction(REPLAY);

const initialState = {
    gaming: false,
    turn : true,
    nullArr : [],
    replay : false,
    useArr : [],
    numCheck : [],
};

export default handleActions({
  [START_TOGGLE]: () => { 

    let playerCellobj = { 1 : [], 2 : [] }
    let numCellobj = { 1 : [], 2 : [] }

    for(let key in playerCellobj) {
      let coverCellObj = {};
      let uniqNum = [];
      let num = 1;

      function recursion() {
        coverCellObj = {};

        if(num > 25) {
          return playerCellobj;
        }

        let random = Math.trunc(Math.random() * (25 - 1 + 1)) + 1;
        if(uniqNum.includes(random) === false) {
          uniqNum.push(random);

          coverCellObj[num] = { 'use' : false, 'num' : random }
          numCellobj[key].push(random)
          playerCellobj[key].push(coverCellObj);

          num++;
          return recursion();

        } else {
          return recursion();
        }
      }

      recursion();
    }

    function make_win_rule() {
      let fullArr = [];

      let colArr = [];
      let rowArr = [];

      for(let i = 0; i <= 25; i++) {
          if(i !== 0) {
            colArr.push(i);

          if(i % 5 === 0) {
            fullArr.push(colArr);
            colArr = [];
          }
        }
      }

      let num = 0;
      let coverArr = fullArr.slice(0)
      
      // for(let j = 0; j < coverArr.length; j++) {
      //   for(let l = 0; l < coverArr[j].length; l++) {
      //     if(l === num) {
      //       console.log(coverArr[j][l])
      //       rowArr.push(coverArr[j][l])
      //     }
      //   }

      //   fullArr.push(rowArr);
      //   rowArr = [];
      //   num++;
      // }
      console.log(fullArr)
      return fullArr;
    }
    
    const rule = make_win_rule();
    return { gaming: true, turn : true, playerCell : playerCellobj, nullArr : null, numCheck : numCellobj, winRule : rule}  
  },

  [MAKE_NULL_CELL] : () => {
    let nullCellArr = new Array(25)
    nullCellArr.fill(null, 0, 25)

    return { nullArr : nullCellArr, gaming : false }
  },

}, initialState);
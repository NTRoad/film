import { moveList }  from '../services/home';
export default {

    namespace: 'home',
  
    state: {
        text:'haha',
        moveList:[
            
        ],
        ts: {},
        data: ['aa']
    },
  
    subscriptions: {
        setup({ history, dispatch }) {
            // 监听 history 变化，当进入 `/` 时触发 `load` action
            return history.listen(({ pathname }) => {
              if (pathname === '/') {
                dispatch({ type: 'fetchMoveList' });
              }
            });
        }
    },
  
    effects: {
        *fetchMoveList({ payload }, {call, put}) {
            const response = yield call(moveList, payload);
            console.log(response.data);
            yield put({
                type: 'moveList',
                payload: {
                    data: response.data
                }
            });
            // console.log(response);
        }
    },
  
    reducers: {
      moveList(state, action){
          return {
              ...state,
              data:action.payload.data
          }
      }
    },
  }
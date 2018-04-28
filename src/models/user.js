import {getCode,register,login} from '../services/user';
export default {
  
  namespace: 'user',

  state: {
    isLogin: false,
    userId: 0,
    userName: null,
    codeSuccess:false,
    codeData:null,
    registerSuccess:false,
    registerData:null,
    loginData:null
  },

  subscriptions: {

  },

  effects: {
    *fetchGetCode({ payload }, { call, put}){
      const response = yield call(getCode,payload);
      if(response.data.code){
        yield put({
          type: 'codeSuccess',
          payload: {
            data: response.data
          }
        })
      }else{
        alert("获取验证码失败");
      }
    },
    *fetchRegister({ payload }, { call, put}){
      const response = yield call(register,payload);
      console.log(response);
      if(response.data.code){
        alert('注册成功，请前往登录');
      }else{
        alert(response.data.msg);
      }
    },
    *fetchLogin({ payload }, {call, put}){
      const response = yield call(login,payload);
      console.log(response);
    }
  },

  reducers: {
    codeSuccess(state,action){
      return {
        ...state,
        codeData:action.payload.data,
        codeSuccess:true
      }
    }
  },
}

export default {

  namespace: 'header',

  state: {
      isLogin: false,
      userId: null,
      userImg: null,
      logName: '瞎鸡巴看',
      logTitle: '全世界最牛逼的电影网站',
      showNav:false,
      navList: [
        {
            value: '首页',
            path: '/',
        },{
            value: '关于',
            path: '/about',
        },{
            value: '我的收藏',
            path: '/collection',
        },
      ],
  },

  subscriptions: {

  },

  effects: {

  },

  reducers: {
    changeShowValue(state){
        return {...state,showNav:!state.showNav};
    },
    toNewUrl(state){
        return {...state,showNav:false};
    }
  },
}
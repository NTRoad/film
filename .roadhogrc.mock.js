
export default {
    proxy: {
        "/online": {
          "target": "http://zs.sibada.cf:8080/FilmReviewSystemUser",
          "changeOrigin": true,
          "pathRewrite": { "^/online" : "" }
        }
      }
    // proxy: {
    //     "/api": {
    //         "target": "http://jsonplaceholder.typicode.com/",
    //         "changeOrigin": true,
    //         "pathRewrite": { "^/api" : "" }
    //     }
    // },
};

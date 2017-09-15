import Vue from "vue";
import Router from "vue-router";
//主页面
import main from "./components/main.vue";
//一级路由
// import index from "./components/index.vue";
// import find from "./components/find.vue";
// import listen from "./components/listen.vue";
// import sign from "./components/sign.vue";
//二级路由
// import hot from "./second/hot.vue";
// import jing from "./second/jing.vue";
// import part from "./second/part.vue";
// import zhi from "./second/zhi.vue";
// import guang from "./second/guang.vue";
//三级路由
import classDetail from "./components/classDetail.vue";

import "./static/style.css";

import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios,axios)
//组件懒加载
//方法一
var index =resolve=>require.ensure(['./components/index.vue'],()=>resolve(require('./components/index.vue')));
var find =resolve=>require.ensure(['./components/find.vue'],()=>resolve(require('./components/find.vue')));
var listen =resolve=>require.ensure(['./components/listen.vue'],()=>resolve(require('./components/listen.vue')));
var sign =resolve=>require.ensure(['./components/sign.vue'],()=>resolve(require('./components/sign.vue')));
var hot =resolve=>require.ensure(['./second/hot.vue'],()=>resolve(require('./second/hot.vue')));
var jing =resolve=>require.ensure(['./second/jing.vue'],()=>resolve(require('./second/jing.vue')));
var part =resolve=>require.ensure(['./second/part.vue'],()=>resolve(require('./second/part.vue')));
var zhi =resolve=>require.ensure(['./second/zhi.vue'],()=>resolve(require('./second/zhi.vue')));
var guang =resolve=>require.ensure(['./second/guang.vue'],()=>resolve(require('./second/guang.vue')));
//方法二
// var listen=resolve=>require(['./components/listen.vue'],resolve)
// var find=resolve=>require(['./components/find.vue'],resolve)
//方法三
// var listen=resolve=>require.ensure([],()=>resolve(require("./components/listen.vue")),"group-foo");
// var find=resolve=>require.ensure([],()=>resolve(require("./components/find.vue")),"group-foo");

let router=new Router({
    // linkActiveClass:"on",
    routes:[
        {
            name:"main",
            path:"/",
            component:main,
            children:[
                {
                    name:"index",
                    path:"index",
                    component:index,
                     children:[
                        {
                            name:"hot",
                            path:"hot",
                            component:hot,
                        },
                        {
                            name:"jing",
                            path:"jing",
                            component:jing
                        },
                        {
                            name:"part",
                            path:"part",
                            component:part
                        },
                        {
                            name:"zhi",
                            path:"zhi",
                            component:zhi
                        },
                        {
                            name:"guang",
                            path:"guang",
                            component:guang
                        },
                         {
                            path:"/index",
                            redirect:"/index/part"
                        }
                    ]
                },
                {
                    name:"find",
                    path:"find",
                    component:find
                },
                {
                    name:"listen",
                    path:"listen",
                    component:listen
                },
                {
                    name:"sign",
                    path:"sign",
                    component:sign
                },
                {
                    path:"/",
                    redirect:"/index"
                },
                 {
                    name:"classDetail",
                    path:"/classDetail",
                    component:classDetail
                }
            ]
        }
    ]
})
Vue.use(Router);
new Vue({
    el:"#app",
    router
})
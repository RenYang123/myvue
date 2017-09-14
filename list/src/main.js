import "./style.css";
import Vue from "vue/dist/vue.js";
import Router from "vue-router";
import Jing from "./components/jing.vue";
import Part from "./components/part.vue";
import Home from "./components/home.vue";
import Zhi from "./components/zhi.vue";
import Guang from "./components/guang.vue";
let router=new Router({
    routes:[
        {
            name:"home",
            path:"/home",
            component:Home
        },
         {
            name:"jing",
            path:"/jing",
            component:Jing
		},
		 {
            name:"part",
            path:"/part",
            component:Part
		},
		{
            name:"zhi",
            path:"/zhi",
            component:Zhi
		},
		{
            name:"guang",
            path:"/guang",
            component:Guang
        }
    ]
})
Vue.use(Router);
new Vue({
    el:"#app",
    router
})
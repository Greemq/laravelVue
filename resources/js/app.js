

require ('./bootstrap');
import Vue from 'vue';
import VueRouter from "vue-router";
import Navbar from './components/Navbar';
import Posts from './components/Posts';
import CreatePost from './components/CreatePost';

Vue.use(VueRouter);

//
Vue.component('navbar',require('./components/Navbar.vue').default);
Vue.component('posts',require('./components/Posts.vue').default);
const routes=[
    {name:'posts',path:'/',component:Posts},
    {name:'create',path:'/create',component:CreatePost}
]
const router=new VueRouter({
    routes,
    mode:'history'
});
Vue.use(router);
const app=new Vue({
    el:'#app',
    router:router,
    components:{
        Posts,
        Navbar,
        CreatePost
    }
});

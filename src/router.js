import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './views/Home';
import About from './views/About';
import Attribute from './views/Attribute';
import Todo from './views/Todo';
import State from './views/State';

// router를 사용하기 위한 use
Vue.use(VueRouter);

// router 경로 설정을 위한 선언
const router =  new VueRouter({
    mode: 'history',
    routes: [
        {path: '/', component: Home},
        {path: '/about', component: About},
        {path: '/attr', component: Attribute},
        {path: '/todo', component: Todo},
        {path: '/state', component: State},
    ]
});

export default router;
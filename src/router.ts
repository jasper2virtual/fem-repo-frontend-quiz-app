import { createRouter, createWebHashHistory } from "vue-router";

import StartMenu from "./pages/StartMenu.vue";
import Question from "./pages/Question.vue";
import Score from "./pages/Score.vue";

const routes = [
    { name: 'startMenu', path: '/', component: StartMenu, meta: { title: 'Quiz menu' } },
    { name: 'question', path: '/question/:subjectId', component: Question, meta: { title: 'Quiz question' } },
    { name: 'score', path: '/score/:subjectId', component: Score, meta: { title: 'Quiz completed' } },
];

const router = createRouter({
    routes,
    history: createWebHashHistory(),
});

router.beforeEach((to, from, next) => {
    document.title = to.meta.title || 'Default Title';
    next();
});

export default router;


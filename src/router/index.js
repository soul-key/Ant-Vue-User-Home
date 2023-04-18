import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: () => import("@/view/home") },
        {
            path: '/user',
            component: () => import("@/view/user"),
            redirect: {name: "worker"},
            children:[
                {
                    path: "/worker",
                    name: "worker",
                    component:  () => import("@/view/user/components/worker.vue"),
                    meta: {
                        title: "页面a"
                    }
                },
                {
                    path: "/info",
                    name: "user-info",
                    component:  () => import("@/view/user/components/user-info.vue"),
                    meta: {
                        title: "页面b"
                    }
                },
                {
                    path: "/safe",
                    name: "user-safe",
                    component:  () => import("@/view/user/components/user-safe.vue"),
                    meta: {
                        title: "页面c"
                    }
                },
            ],
        },
    ]
})
export default router
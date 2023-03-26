export default [

    {
        path: '/login',
        component: () => import("@/views/login"),
        name: "Login",
        meta: { show: false }
    },
    {
        path: '/register',
        component: () => import("@/views/register"),
        name: "Register",
        meta: { show: false }
    },
    {
        path: '/home',
        component: () => import("@/views/home"),
        name: "Home",
        meta: { show: false }
    },
    {
        path: '/detail',
        component: () => import("@/views/detail"),
        name: "Detail",
        meta: { show: false }
    },
    {
        path: '/userCenter',
        component: () => import("@/views/userCenter"),
        name: "userCenter",
        meta: { show: false }
    },
    {
        path: '*',
        redirect: '/home',
    }
];
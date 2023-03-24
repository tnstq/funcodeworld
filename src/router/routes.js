export default [
   
    {
        path:'/login',
        component:()=>import("@/views/login"),
        meta:{show:false}
    },
    {
        path:'/register',
        component:()=>import("@/views/register"),
        meta:{show:false}
    },
];
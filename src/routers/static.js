// #region 开发文档路由 正常使用时删除
const dev = [
    {
        path: '/admindev',
        name: 'admindev',
        component: () => import('@/views/AdiminDev')
    }
]
//  #endregion

//#region   静态路由 不用从后台获取


const category = [
    {
        path: 'movie',
        name: 'moviepage',
        component: () => import('@/views/index/category/moviepage')
    },
    {
        path: 'anime',
        name: 'animepage',
        component: () => import('@/views/index/category/animationpage')
    }
]
const space = {
    path: 'space',
    name: 'spacepage',
    redirect: { name: 'spacepage_home' },
    component: () => import('@/views/index/space'),
    children: [
        {
            path: 'home',
            name: 'spacepage_home',
            component: () => import('@/views/index/space/routespage/home')
        },
        {
            path: 'contribute',
            component: () => import('@/views/index/space/routespage/contribute'),
            redirect: { name: 'contribute_video' },
            children: [


                {
                    name: 'contribute_video',
                    path: 'video',
                    component: () => import('@/views/index/space/routespage/contribute/video.vue')
                },
                {
                    path: 'audio',
                    component: () => import('@/views/index/space/routespage/contribute/audio.vue')
                },
                {
                    path: 'article',
                    component: () => import('@/views/index/space/routespage/contribute/article.vue')
                },
                {
                    path: 'album',
                    component: () => import('@/views/index/space/routespage/contribute/album.vue')
                }
            ]
        },
        {
            path: 'dynamic',
            component: () => import('@/views/index/space/routespage/dynamic')
        },
        {
            path: 'compilations',
            component: () => import('@/views/index/space/routespage/compilations'),
            redirect: { name: 'compilations_series' },
            children: [
                {
                    path: 'series',
                    name: 'compilations_series',
                    component: () => import('@/views/index/space/routespage/compilations/series.vue')

                },
                {
                    path: ':id',
                    component: () => import('@/views/index/space/routespage/compilations/list.vue')
                }

            ]
        },
        {
            path: 'favlist',
            component: () => import('@/views/index/space/routespage/favlist'),
            redirect: { name: 'favlist_default' },
            children: [
                {
                    path: 'default',
                    name: 'favlist_default',
                    component: () => import('@/views/index/space/routespage/favlist/createcard.vue')
                },
                {
                    path: ':id',
                    component: () => import('@/views/index/space/routespage/favlist/createcard.vue')

                }
            ],
        },
        {
            path: 'subscription',
            component: () => import('@/views/index/space/routespage/subscription'),
            redirect: { name: 'subscription_bangumi' },
            children: [
                {
                    path: 'bangumi',
                    name: 'subscription_bangumi',
                    component: () => import('@/views/index/space/routespage/subscription/bangumi')
                },
                {
                    path: 'cinema',

                    component: () => import('@/views/index/space/routespage/subscription/cinema')
                },
                {
                    path: 'label',
                    component: () => import('@/views/index/space/routespage/subscription/label')
                }
            ]
        },
        {
            path: 'setting',
            component: () => import('@/views/index/space/routespage/setting')
        },

    ]
}
const main = [
    {
        path: '/',
        redirect: { name: 'homepage' },
        component: () => import('@/views/index'),
        children: [
            {
                path: '',
                name: 'homepage',
                component: () => import('@/views/index/homepage')
            },
            {
                path: 'search',
                name: 'searchpage',
                component: () => import('@/views/index/searchpage')
            },
            {
                path: 'play',
                name: 'playpage',
                component: () => import('@/views/index/playpage')
            },
            {
                path:'popular',
                name:'popularpage',
                component:()=>import('@/views/index/popularpage')
            },
            ...category,
            space
        ]
    },
]
//#endregion

//#region 创作中心路由 以后需要动态从后台获取
/**
 * 上传路由
 */
const upload = {
    path: 'upload',
    component: () => import('@/views/platform/content/upload'),
    redirect: { name: 'upload_video' },
    children: [
        {
            path: 'video',
            name: 'upload_video',
            component: () => import('@/views/platform/content/upload/video')
        },
        {
            path: 'text',
            component: () => import('@/views/platform/content/upload/text')
        },
        {
            path: 'audio',
            component: () => import('@/views/platform/content/upload/audio')
        }
    ]
}
const upload_manager=  {
    path: 'upload-manager',
    component: () => import('@/views/platform/content/upload-manager'),
    redirect: { name: 'upload-manager_article' },
    children: [
        {
            path: 'article',
            name: 'upload-manager_article',
            component: () => import('@/views/platform/content/upload-manager/article'),
           redirect:{name:'upload-manager_article_video'},
            children:[
                {
                    path:'video',
                    name:'upload-manager_article_video',
                    component:()=>import('@/views/platform/content/upload-manager/article/video'),
                },
                {
                    path:'audios',
                    component:()=>import('@/views/platform/content/upload-manager/article/audios'),
                },
                {
                    path:'text',
                    component:()=>import('@/views/platform/content/upload-manager/article/text'),
                }
            ]
        },
        {
            path: 'appeal',
            component: () => import('@/views/platform/content/upload-manager/appeal')
        },
        {
            path: 'audience-zimu',
            component: () => import('@/views/platform/content/upload-manager/zimu')
        }
    ]
}
const platform = {
    path: '/platform',
    name: 'platform',
    redirect: { name: 'platform_home' },
    component: () => import('@/views/platform/index.vue'),
    children: [
        {
            path: 'home',
            name: 'platform_home',
            component: () => import('@/views/platform/content/home')
        },
        upload,
      upload_manager,
        {
            path: 'data-up',
            component: () => import('@/views/platform/content/data-up'),
        },
        {
            path: 'fans',
            component: () => import('@/views/platform/content/fans'),
        },
        {
            path: 'interact-manager',
            component: () => import('@/views/platform/content/interact'),
            children: [
                {
                    path: 'danmu',
                    component: () => import('@/views/platform/content/interact/danmu')
                },
                {

                    path: 'comment',
                    component: () => import('@/views/platform/content/interact/comment')
                }
            ]
        },
        {
            path: 'allowance',
            component: () => import('@/views/platform/content/allowance'),
            children: [
                {
                    path:'excitation',
                    component: () => import('@/views/platform/content/allowance/excitation'),
                },
                {
                    path:'center',
                    component: () => import('@/views/platform/content/allowance/center'),
                },
                {
                    path:'upower-manager',
                    component: () => import('@/views/platform/content/allowance/upower-manager'),
                },
            ]
        }
    ]
}

//#endgion
const routes = [
    ...main,

    platform,
    ...dev
]
export default routes

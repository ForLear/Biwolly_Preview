/* 北斗华南粉丝部专用 */

// 顶部导航
const I_Header = () => import('@/pages/triopen/home/header/i_header')
const Home = () => import('@/pages/triopen/home/home')

const T_Header = () => import('@/pages/triopen/header/t_header')

const Triopen = () => import('@/pages/triopen/triopen')
/* 北斗华南粉丝部专用 */

const DocNav = () => import('@/pages/homePage/docNav')

const Doc = () => import('@/pages/homePage/doc')
const Sli = () => import('@/pages/homePage/sliderTest')
const Ingress = () => import('@/pages/ingress/ingress')
const Balabala = () => import('@/pages/balabala/index')

const routes = [
  {
    path: '/Ingress',
    name: 'Ingress',
    component: Ingress,
  },
  {
    path: '/Balabala',
    name: 'Balabala',
    component: Balabala,
  },
  {
    path: '/',
    name: '',
    component: I_Header,
    children: [
      {
        path: '/show',
        name: 'home',
        component: Home,
      }
    ]
  },
  {
    path: '/',
    name: '',
    component: T_Header,
    children: [
      {
        path: '/beidoudou',
        name: 'Triopen',
        component: Triopen,
      },
    ],
  },
  {
    path: '/',
    name: '',
    component: DocNav,
    children: [
      {
        path: '/Doc',
        name: 'Doc',
        component: Doc,
      },
      {
        path: '/Sli',
        name: 'Sli',
        component: Sli,
      },
    ],
  },
]

export default routes
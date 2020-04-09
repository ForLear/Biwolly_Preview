/* 北斗华南粉丝部专用 */

// 顶部导航
const I_Header = () => import('@/pages/triopen/home/header/i_header')
const Home = () => import('@/pages/triopen/home/home')

const T_Header = () => import('@/pages/triopen/header/t_header')

const Triopen = () => import('@/pages/triopen/triopen')
/* 北斗华南粉丝部专用 */

const DocNav = () => import('@/pages/homePage/docNav')

const Doc = () => import('@/pages/homePage/doc')
const Trie = () => import('@/pages/dataStructure/tree/trie')

const JsDoc = () => import('@/pages/jsDoc/index')

/* 移动端 */
const H5 = () => import('@/pages/viewH5/index')
const Fish = () => import('@/pages/viewH5/show/show')

const routes = [
  {
    path: '/',
    name: '',
    component: I_Header,
    children: [
      {
        path: '/show',
        name: 'show',
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
        path: '/Trie',
        name: 'Trie',
        component: Trie,
      },
      {
        path: '/Js_Doc',
        name: 'JsDoc',
        component: JsDoc,
      }
    ],
  },
  {
    path: '/',
    name: '',
    component: H5,
    children: [
      {
        path: '/Fish',
        name: 'Fish',
        component: Fish,
      },
    ]
  }
]

export default routes
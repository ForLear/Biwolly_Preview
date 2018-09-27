/* 北斗华南粉丝部专用 */
const TriopenIndex = () => import('@/pages/triopen/index')
const Triopen = () => import('@/pages/triopen/triopen')

const DocNav = () => import('@/pages/homePage/docNav')

const Doc = () => import('@/pages/homePage/doc')
const Ingress = () => import('@/pages/ingress/ingress')
const Balabala = () => import('@/pages/balabala/index')

const routes = [
  {
    path: '/Fans',
    name: 'TriopenIndex',
    component: TriopenIndex,
  },
  {
    path: '/beidoudou',
    name: 'Triopen',
    component: Triopen,
  },
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
    component: DocNav,
    children: [
      {
        path: '/Doc',
        name: 'Doc',
        component: Doc,
      },
    ],
  },
]

export default routes
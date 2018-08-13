const DocNav = () => import('@/pages/docNav')

const Doc = () => import('@/pages/homePage/doc')
const Test = () => import('@/pages/test/test')

const routes = [
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
const DocNav = () => import('@/pages/docNav')

const Doc = () => import('@/pages/homePage/doc')


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
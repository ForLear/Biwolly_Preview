const DocNav = () => import('@/pages/docNav')

const Doc = () => import('@/pages/homePage/doc')
const Ingress = () => import('@/pages/ingress/ingress')

const routes = [
  {
    path: '/Ingress',
    name: 'Ingress',
    component: Ingress,
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
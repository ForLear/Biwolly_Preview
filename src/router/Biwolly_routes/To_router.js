const DocNav = () => import('@/pages/homePage/docNav')
const login = () => import('@/pages/login/login')
const algorithm = () => import('@/pages/algorithm/algorithm')

const routes = [
  {
    path: '/login',
    name: 'login',
    component: login,
  },
  {
    path: '/algorithm',
    name: 'algorithm',
    component: algorithm
  },
  {
    path: '/',
    name: '',
    component: DocNav,
    children: [],
  }
]

export default routes
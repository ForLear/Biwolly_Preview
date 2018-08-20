const DocNav = () => import('@/pages/docNav')
const login = () => import('@/pages/login/login')

const routes = [
  {
    path: '/login',
    name: 'login',
    component: login,
  },
  {
    path: '/',
    name: '',
    component: DocNav,
    children: [],
  }
]

export default routes
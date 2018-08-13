const DocNav = () => import('@/pages/docNav')
const login = () => import('@/pages/login/login')
const register = () => import('@/pages/login/register')

const routes = [
  {
    path: '/login',
    name: 'login',
    component: login,
  },
  {
    path: '/register',
    name: 'register',
    component: register,
  },
  {
    path: '/',
    name: '',
    component: DocNav,
    children: [],
  }
]

export default routes
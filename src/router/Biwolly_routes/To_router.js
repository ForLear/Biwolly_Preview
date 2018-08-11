const Home = () => import('@/pages/home')

const login = () => import('@/pages/login/login')

const routes = [
  {
    path: '/login',
    name: 'login',
    component: login,
  },
]

const route = {
  path: '/',
  name: '',
  component: Home,
  children: [],
}

route.children.push(...routes)

export default route
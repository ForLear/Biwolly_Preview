const login = () => import('@/pages/login/login')

const routes = [

]

const route = {
  path: '/login',
  name: '',
  component: login,
  children: [],
}

route.children.push(...routes)

export default route
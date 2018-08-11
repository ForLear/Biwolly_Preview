const Home = () => import('@/pages/home')

const Doc = () => import('@/pages/homePage/doc')


const routes = [
  {
    path: '/Doc',
    name: 'Doc',
    component: Doc,
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
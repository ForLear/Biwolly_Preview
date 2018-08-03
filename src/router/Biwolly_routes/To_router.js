import Home from '@/pages/home'  


import Doc from '@/pages/homePage/doc'

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
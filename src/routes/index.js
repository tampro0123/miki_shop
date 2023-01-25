import Register from '~/pages/auth/register';
import Home from '~/pages/home';


const publicRoutes = [
  { path: '/', component: Home },
  { path: '/register', component: Register }
]

const privateRoutes = []

export { publicRoutes, privateRoutes }
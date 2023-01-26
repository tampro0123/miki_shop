import Register from '~/pages/auth/register';
import Home from '~/pages/home';
import Login from '~/pages/auth/login/Login';


const publicRoutes = [
  { path: '/', component: Home },
  { path: '/register', component: Register },
  { path: '/login', component: Login }
]

const privateRoutes = []

export { publicRoutes, privateRoutes }
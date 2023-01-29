import Register from '~/pages/auth/register';
import Home from '~/pages/home';
import Login from '~/pages/auth/login/Login';
import Products from '~/pages/products/Products';


const publicRoutes = [
  { path: '/home', component: Home },
  { path: '/register', component: Register },
  { path: '/login', component: Login },
  { path: '/products', component: Products },

]

const privateRoutes = []

export { publicRoutes, privateRoutes }
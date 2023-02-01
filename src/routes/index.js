import Register from '~/pages/auth/register';
import Home from '~/pages/home';
import Login from '~/pages/auth/login/Login';
import Products from '~/pages/products/Products';
import DetailProduct from '~/pages/products/Detail';

const publicRoutes = [
  { path: '/home', component: Home },
  { path: '/register', component: Register },
  { path: '/login', component: Login },
  { path: '/products', component: Products },
  { path: '/products/:id', component: DetailProduct },


]

const privateRoutes = []

export { publicRoutes, privateRoutes }
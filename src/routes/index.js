import Register from '~/pages/auth/register';
import Home from '~/pages/home';
import Login from '~/pages/auth/login/Login';
import Products from '~/pages/products/Products';
import DetailProduct from '~/pages/products/Detail';
import About from '~/pages/about/About';

const publicRoutes = [
  { path: '/', component: Home },
  { path: '/home', component: Home },
  { path: '/register', component: Register },
  // { path: '/login', component: Login },
  { path: '/products', component: Products },
  { path: '/products/:id', component: DetailProduct },
  { path: '/about', component: About }
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };

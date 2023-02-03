import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DefaultLayout from './components/Layout/DefaultLayout/DefaultLayout';
import Login from './pages/auth/login/Login';
import { publicRoutes } from './routes';
import ScrollToTop from './scollToTop/ScrollToTop';

function App() {
  return (
    <Router>
      <div className='App'>
        <ScrollToTop />
        <Routes>
          <Route path='login' element={<Login />} />
          <Route path='/' element={<DefaultLayout />}>
            {publicRoutes.map((route, index) => {
              const Page = route.component;
              return <Route key={index} path={route.path} element={<Page />} />;
            })}
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

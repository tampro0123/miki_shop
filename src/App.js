
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';
import ScrollToTop from './scollToTop/ScrollToTop';

function App() {
  return (
    <Router>
      <div className="App">

        <ScrollToTop />
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component
            return <Route key={index} path={route.path} element={<Page />} />
          })}

        </Routes>
      </div>
    </Router>
  );
}

export default App;

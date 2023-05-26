/* eslint-disable react/jsx-max-depth */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
import DefaultLayout from './components/layouts/defaultLayout';
import Home from './pages/home/home';
import './App.css';
import './language/i18n';

function App() {
  return (
    <Router>
      <div className="App">
        <Suspense fallback={ <div>Loading...</div> }>
          <DefaultLayout>
            <Routes>
              <Route exact path="/" element={ <Home /> } />
            </Routes>
          </DefaultLayout>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;

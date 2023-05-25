import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DefaultLayout from './components/layouts/defaultLayout'; 
import Home from './pages/home/home';
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <DefaultLayout >
          <Routes>
            <Route exact path="/portfolio" element={<Home />} />
          </Routes>
        </DefaultLayout>
      </div>
    </Router>
  );
}

export default App;

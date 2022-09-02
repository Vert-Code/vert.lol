import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Hello from './components/Hello'
//import Projects from './components/Projects';
import NotFound from './pages/NotFound'

function App() {
  return (
    <div className="App">
    <Router>
        <Routes>
          <Route path="/" element={<Hello />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

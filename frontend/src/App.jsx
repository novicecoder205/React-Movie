import './css/App.css'
import Favortites from './pages/Favorites';
import Home from "./pages/Home"
import NavBar from './components/NavBar';
import {Routes, Route} from "react-router-dom"


function App() {
  const movieNumber =1;
  return (
    <div>
      <NavBar />
    <main className="main-content">
      <Routes>
        <Route path ="/" element={<Home />} />
        <Route path ="/favorites" element={<Favortites />} />
        </Routes>
    </main>
    </div>
  );
}


export default App;

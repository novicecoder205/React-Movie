import './App.css'
import MovieCard from './components/MovieCard';

function App() {
  const movieNumber =1;
  return (
    <>
      {movieNumber === 1 && <MovieCard movie={{title: "Gold Rush Update", release_date:"2008"}}/>}
    </>
  );
}


export default App

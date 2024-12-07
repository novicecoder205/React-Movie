import MovieCard from "../components/MovieCard"
import { useState } from "react";
import "../css/Home.css"
function Home(){
    const [searchQuery, setSearchQuery] = useState("");
    const movies = [
        {id: 1, title: "Australian Christmas", release_date: "2010"},
        {id: 2, title: "The Hatless", release_date: "2011"},
        {id: 3, title: "Pyromania" ,release_date: "2012"},
        {id: 4, title: "Mann vs. Machine", release_date: "2012"},
        {id: 5, title: "Scream Fortress", release_date: "2012"},
        {id: 6, title: "Robotic Boogaloo", release_date: "2013"},
        {id: 7, title: "The Two Cities" ,release_date: "2013"},
        {id: 8, title: "Swissmas" ,release_date: "2013"},
        {id: 9, title: "Love & War" ,release_date: "2014"},
        {id: 10, title: "End Of The Line" ,release_date: "2014"},
        {id: 11, title: "Gun Mettle" ,release_date: "2015"},
        {id: 12, title: "Invasion" ,release_date: "2015"},
        {id: 13, title: "Tought Break" ,release_date: "2015"},
        {id: 14, title: "The Meet Your Match" ,release_date: "2016"},
        {id: 15, title: "The Jungle Inferno" ,release_date: "2017"},
    ];
    const handleSearch = (e) => {
        e.preventDefault();
        alert(searchQuery);
        setSearchQuery("");
    };
    return (
    <div className ="home">
        <form onSubmit={handleSearch} className="search-form">
          <input 
            type="text" 
            placeholder="Search for movie..." 
            className="search-input"
            value = {searchQuery}
            onChange={(e)=>setSearchQuery(e.target.value)}
            />
            
            <button type ="submit" className="search-button">
                Search
            </button>
        </form>

        <div className="movies-grid">
            {movies.map(
                (movie) =>
                    //47:58
                  //movie.title.toLowerCase().startsWith(searchQuery) && 
                (
                    <MovieCard movie={movie} key={movie.id}/>  
                )
        )}
        </div>
    </div>
    );
}

export default Home;
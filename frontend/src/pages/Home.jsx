import MovieCard from "../components/MovieCard"
function Home(){
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
        {id: 13, title: "The Meet Your Match" ,release_date: "2016"},
        {id: 13, title: "The Jungle Inferno" ,release_date: "2017"},
    ]
    return <div className ="home">
        <div className="movies-grid">
            {movies.map(movie =><MovieCard movie={movie} key={movie.id}/>)}
        </div>
    </div>
}
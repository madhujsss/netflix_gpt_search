import { options } from '../Utils/constants'
import { useDispatch } from 'react-redux'
import { addUpcomingMovies } from '../Utils/moviesSlice'
import { useEffect } from 'react'


const useUpcomingMovies = () => {
    const dispatch = useDispatch();

  const getUpcomingMovies = async () =>
  {
    const data = await 
    fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
     const json = await data.json();
    
     dispatch(addUpcomingMovies(json.results));
  }

  useEffect(() => {
    getUpcomingMovies();
  }, []);

};

export default useUpcomingMovies;
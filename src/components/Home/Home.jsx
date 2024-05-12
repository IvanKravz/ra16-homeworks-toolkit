import './Home.css'
import { Button } from 'antd';
import { Link } from "react-router-dom"
import { useAppSelector } from '../App/hooks';
import { SearchFilm } from './SearchFilm';
import { FilmsList } from '../FilmsList/FilmsList';
import { filmsFavourites } from '../App/Slices/favouritesSlice';

export const Home = () => {
    const filmsList = useAppSelector(state => state.search.items);
    const loading = useAppSelector(state => state.search.loading);
    const filmsFav = useAppSelector(filmsFavourites);
    
    return (
        <>
        <div className='header'>
            <SearchFilm/>
            <Link className='btn_favourites' to='/favourites'>
                <Button 
                    type="primary"
                    >Избранное {filmsFav.length > 0 && filmsFav.length}
                </Button>    
            </Link>
        </div>
        {loading && <h1 className='card_load'>Загрузка...</h1>} 
        {filmsList === undefined && <h1 className='card_load'>Такого фильма нет!</h1>}
        {!loading && <FilmsList filmsList={filmsList} />}
        </>
    )
}

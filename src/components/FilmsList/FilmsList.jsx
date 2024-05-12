import { Button } from 'antd';
import Card from 'react-bootstrap/Card';
import { useAppDispatch } from '../App/hooks';
import { fetchCardFilm } from '../App/Slices/cardFilmSlice';
import { addFilm } from '../App/Slices/favouritesSlice';
import { useNavigate } from "react-router-dom"

export const FilmsList = ( { filmsList } ) => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch();

  const getCardFilm = async (imdbID) => {
    dispatch(fetchCardFilm(imdbID));
    navigate('/card')
}

  const addFavourites = (item) => {
    dispatch(addFilm(item))
  }

  return (
    <div className='films_list'>
    {filmsList?.map(item => (
            <Card key={item.imdbID} style={{ width: '20rem' } }>
              <Card.Img 
                onClick={() => getCardFilm(item.imdbID)} 
                variant="top" 
                src={item.Poster} 
                style={{ width: '300px', height: '450px' , cursor: 'pointer' }}/>
              <Card.Body>
                <Card.Title>Название: {item.Title}</Card.Title>
                <Card.Text>Год: {item.Year}</Card.Text>
                <Button onClick={() =>addFavourites(item)} variant="primary">Добавить в избранное</Button>
              </Card.Body>
            </Card>
        ))}
    </div>

  )
}

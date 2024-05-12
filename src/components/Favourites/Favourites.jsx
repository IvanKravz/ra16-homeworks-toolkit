import './Favourites.css'
import { useNavigate } from "react-router-dom"
import { HomeOutlined } from '@ant-design/icons';
import { useAppDispatch, useAppSelector } from "../App/hooks";
import { Button } from 'antd';
import Card from 'react-bootstrap/Card';
import { filmsFavourites, removeFilm } from '../App/Slices/favouritesSlice';

export const Favourites = () => {
  const navigate = useNavigate();
  const filmsList = useAppSelector(filmsFavourites);
  const dispatch = useAppDispatch();

  const handleGoBack = () => {
    navigate(-1)
  }

  const clickRemoveFilm = (imdbID) => {
    dispatch(removeFilm(imdbID));
  }

  return (
    <div className="favourites">
      <div className="btn_home">
        <HomeOutlined onClick={handleGoBack} style={{ fontSize: '24px', color: '#08c' }}/>
      </div>
      <div className='favourites_cards'>
      {filmsList?.map(film => (
        <>
          <Card key={film.imdbID} className="favourites_card_film">
            <Card.Img  
              variant="top" 
              src={film.Poster} />
            <Card.Body>
              <Card.Title>Название: {film.Title}</Card.Title>
              <Card.Text>Год: {film.Year}</Card.Text>
              <Card.Text>Жанр: {film.Genre}</Card.Text>
              <Card.Text>Продолжительность: {film?.runtime}</Card.Text>
              <Card.Text>Режиссер: {film.Director}</Card.Text>
              <Card.Text>Актеры: {film.Actors}</Card.Text>
              <Card.Text>imdb рейтинг: {film.imdbRating}</Card.Text>
              <Button onClick={() => clickRemoveFilm(film.imdbID)} variant="primary">Удалить из избранного</Button>
            </Card.Body>
          </Card>
        </>
    ))}
    </div>
    </div>
  )
}

import './CardFilm.css'
import { useNavigate } from "react-router-dom"
import { HomeOutlined } from '@ant-design/icons';
import { useAppDispatch, useAppSelector } from '../App/hooks';
import { clear } from '../App/Slices/cardFilmSlice';
import { addFilm } from '../App/Slices/favouritesSlice';
import { Button } from 'antd';
import Card from 'react-bootstrap/Card';

export const CardFilm = () => {
  const navigate = useNavigate()
  const film = useAppSelector(state => state.card.item);
  const loading = useAppSelector(state => state.card.loading);
  const dispatch = useAppDispatch();

  const handleGoBack = () => {
    dispatch(clear())
    navigate(-1)
  }

  const addFavourites = (film) => {
    dispatch(addFilm(film))
  }

  return (
    <>
      <div className="btn_home">
        <HomeOutlined onClick={handleGoBack} style={{ fontSize: '24px', color: '#08c' }}/>
      </div>
      {loading && <div className="card_loading">...Загружается</div>}
      {!loading && <div className="card_film">
        <Card>
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
            <Button onClick={() => addFavourites(film)} variant="primary">Добавить в избранное</Button>
          </Card.Body>
        </Card>
      </div>}
    </>
  )
}

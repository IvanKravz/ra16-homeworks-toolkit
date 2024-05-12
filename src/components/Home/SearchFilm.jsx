import { Input } from 'antd';
const { Search } = Input;
import { useAppDispatch } from '../App/hooks';
import { fetchFilms } from '../App/Slices/searchSlice';

export const SearchFilm = () => {

  const dispatch = useAppDispatch();

  const searchFilm = async (name) => {
    if(name.length === 0) return
    dispatch(fetchFilms(name));
  }

  return (
    <div className='search_home'>
      <Search
        placeholder="Название фильма"
        allowClear
        enterButton="Поиск"
        style={{
            width: 400,
        }}
        onSearch={searchFilm}
        required
        >
      </Search>
    </div>
  )
}

import './App.css'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import { Home } from './components/Home'
import { CardFilm } from './components/CardFilm'
import { Favourites } from './components/Favourites'
import { NotFoundFilm } from './components/NotFound/NotFoundFilm'
import { NotFound } from './components/NotFound/NotFound'
import { Layout } from './components/Layout'

export const url = "http://www.omdbapi.com/?apikey=64405bd2&";

function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='/card' element={<CardFilm/>}/>
        <Route path='/favourites' element={<Favourites/>}/>
        <Route path='/notfound' element={<NotFoundFilm/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Route>
    )
  )

  return (
    <RouterProvider router={routes} />
  )
}

export default App

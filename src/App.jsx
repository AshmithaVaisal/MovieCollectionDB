
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import CardList from './components/Displayarea/CardList'
import { NavBar } from './components/navbar/NavBar'
import { SearchBar } from './components/searchbar/SearchBar'
import { Home } from './Pages/Home'
import { MoviePage } from './Pages/Movie'
import { TvPage } from './Pages/TV'
import { SignInPage } from './Pages/SignIn'

function App() {
  return (
    <>
    
      <BrowserRouter>
        <NavBar/>
        <SearchBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/movie' element={<MoviePage/>}/>
          <Route path='/tv' element={<TvPage/>}/>
          <Route path='/signin' element={<SignInPage/>}/>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App

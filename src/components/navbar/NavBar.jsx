import { Link } from 'react-router-dom'
import './navBar.css'

export const NavBar = () => {
  return (
    <>
      <nav className='nav-container'>
        <ul className='nav-list'>
          <li className='logo'><Link to='/'>FilmDeck FD</Link></li>
          <li><Link to='/movie'>Movies</Link></li>
          <li><Link to='/tv'>Tv Shows</Link></li>
          <li><Link to='/people'>People</Link></li>
          <li><Link to='/signin'>Login</Link></li>
        </ul>
      </nav>
    </>
  )
}


import { useState, useEffect } from 'react'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'


const films = [
  { title: 'Inception', genre: 'Fantascienza' },
  { title: 'Il Padrino', genre: 'Thriller' },
  { title: 'Titanic', genre: 'Romantico' },
  { title: 'Batman', genre: 'Azione' },
  { title: 'Interstellar', genre: 'Fantascienza' },
  { title: 'Pulp Fiction', genre: 'Thriller' },
]


function App() {

  const [selectGenre, setSelectGenre] = useState('')
  const [filteredFilms, setFilteredFilms] = useState(films)


  useEffect(() => {

    if (selectGenre != '') {
      const filtered = films.filter(film => (
        film.genre == selectGenre
      ))
      setFilteredFilms(filtered)
    } else (
      setFilteredFilms(films)
    )


  }, [selectGenre]);



  return (
    <div className='container py-5'>

      <select className='form-select' onChange={(e) => setSelectGenre(e.target.value)}>
        <option value="">Select by genre</option>
        <option value="Fantascienza">Fantascienza</option>
        <option value="Thriller">Thriller</option>
        <option value="Romantico">Romantico</option>
        <option value="Azione">Azione</option>
      </select>

      <ul>
        {
          filteredFilms.map((film, i) => (
            <li key={i}>{film.title}</li>
          ))
        }
      </ul>

    </div >
  )
}

export default App

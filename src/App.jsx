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

  //input
  const [searchFilm, setSearchFilm] = useState('')



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



  useEffect(() => {

    if (searchFilm != '') {
      const resultSearch = films.filter(film => (
        film.title.toLowerCase().includes(searchFilm.toLowerCase())
      ))
      setFilteredFilms(resultSearch)
    } else {
      setFilteredFilms(films)
    }

  }, [searchFilm])


  return (
    <div className="container py-5">

      <div className="mb-5">
        <div className="row">
          <div className="col-6">
            <input className="form-control" type="search" placeholder="Filter by title" onChange={(e) => setSearchFilm(e.target.value)} />
          </div>
        </div>
      </div>

      <select className="form-select" onChange={(e) => setSelectGenre(e.target.value)}>
        <option value="">Filter by genre</option>
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

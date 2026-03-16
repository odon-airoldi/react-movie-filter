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

  //input search film by title
  const [searchFilm, setSearchFilm] = useState('')

  //input add film
  const [addedFilms, setAddedFilms] = useState([])
  const [addedFilmTitle, setAddedFilmTitle] = useState('')




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



  // added film
  useEffect(() => {
    console.log('ho aggiunto un film')
  }, [addedFilms])


  //form
  function formAddFilm(e) {

    e.preventDefault()

    const newFilm = {
      title: addedFilmTitle,
      // genre: 'azione'
    }

    setAddedFilms([...addedFilms, newFilm])
    setAddedFilmTitle('')

  }

  console.log(addedFilms)

  return (
    <div className="container py-5">

      <div className="row gy-5">
        <div className="col-6">
          <select className="form-select" onChange={(e) => setSelectGenre(e.target.value)}>
            <option value="">Filter by genre</option>
            <option value="Fantascienza">Fantascienza</option>
            <option value="Thriller">Thriller</option>
            <option value="Romantico">Romantico</option>
            <option value="Azione">Azione</option>
          </select>
        </div>
        <div className="col-6">
          <input className="form-control" type="search" placeholder="Filter by title" onChange={(e) => setSearchFilm(e.target.value)} />
        </div>
        <div className="col-12">
          <ul>
            {
              filteredFilms.map((film, i) => (
                <li key={i}>{film.title}</li>
              ))
            }
          </ul>
        </div>
        <div className="col-12">
          <h2 className="h6">Add film</h2>
          <form onSubmit={formAddFilm}>
            <div className="row">
              <div className="col-6">
                <input className="form-control" type="text" placeholder="Title" onChange={(e) => setAddedFilmTitle(e.target.value)} />
                <button type="submit" className="btn btn-primary">Add</button>
              </div>
            </div>
          </form>
        </div>
      </div >



    </div >
  )
}

export default App

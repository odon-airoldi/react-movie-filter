import { useState } from 'react'
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

  const [selectGenre, setSelectGenre] = useState('select')



  return (
    <div className='container py-5'>

      <select className='form-select' onChange={(e) => setSelectGenre(e.target.value)}>
        <option value="" >Select by genre</option>
        {
          films.map(film => (
            <option value={film.genre}>{film.genre}</option>
          ))
        }
      </select>

      <ul>
        {
          films
            .filter(film => film.genre === selectGenre)
            .map((film, index) => (
              <li key={index}>{film.title}</li>
            ))
        }
      </ul>

    </div>
  )
}

export default App

import React, { useState } from 'react'
import { ApiTitle } from '../component/ApiTitle';
const TitlePage = () => {

    const [title,setTitle] = useState('');
    const [details,setDetails] = useState([]);
    const [error,setError] = useState('')

    const handleSearch = async() => {
        try{
            setError('')
            const data = await ApiTitle(title)
            setDetails(data.Search)
        }catch(err){
            setError('catch block search handler :',err.message)
            console.log(error)
        }
    }
  return (
    <div className='TitlePage'>
        <h1>Search movie datails with name</h1>

        <div className="input-section">
            <input type="text" 
             value={title}
             onChange={(e) => setTitle(e.target.value)}
             placeholder='Enter movie name ...'   
            />

            <button onClick={handleSearch}>Search</button>
        </div>

        <h2 className='error-display'>{error}</h2>

        <div className="display-response">
            {details.map((detail) => (
                <div className="display-single" key={detail.imdbID}>
                    <div className='IMG'>
                        <img src={detail.Poster} alt={detail.Title} />
                    </div>
                    <div className='INFO'>
                        <h2>{detail.Title}</h2>
                        <p>Year : {detail.Year}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default TitlePage
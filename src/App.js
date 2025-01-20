import { useState } from 'react';
import FindById from './view/FindByID';
import FindByTitle from './view/FindByTitle';

function App() {
  const [movieId,setMovieId] = useState('')

  const shareId = (id) => {
    setMovieId(id)
  }
  
  return (
    <div className="App">
        <FindById Id={movieId}/>
        <FindByTitle onViewDetails={shareId} />        
    </div>
  );
}

export default App;

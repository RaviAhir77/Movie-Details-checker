import { useState } from 'react';
import MVPage from './view/MVPage';
import TitlePage from './view/TitlePage';

function App() {
  const [movieId,setMovieId] = useState('')

  const shareId = (id) => {
    setMovieId(id)
  }
  return (
    <div className="App">
        <MVPage Id={movieId}/>
        <TitlePage onViewDetails={shareId} />        
    </div>
  );
}

export default App;

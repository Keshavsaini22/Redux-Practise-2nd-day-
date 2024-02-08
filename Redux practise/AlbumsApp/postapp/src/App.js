import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { fetchAlbum } from './Redux/slice/albumSlice';

function App() {
  const dispatch = useDispatch();
  const contents = useSelector((state) => state.album.content)
  const isLoading = useSelector((state) => state.album.isLoading)
  const error = useSelector((state) => state.album.error)
  useEffect(() => {
    console.log("Before dispatch", contents)
    dispatch(fetchAlbum())
    console.log("After dispatch", contents)

  }, [dispatch])

  return (
    <div className="App">
    {console.log("Body of apppppppppppp")}
    {contents.map((content)=>(
        <div key={content.id}>
        
          <h3>{content.userId}</h3>
          <p>{content.title}</p>
        </div>
      ))}
      {isLoading && <h1>Data is loading</h1>}
      {error && <h1>Data is loading</h1>}
    </div>
  );
}

export default App;

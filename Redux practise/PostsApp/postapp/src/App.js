import logo from './logo.svg';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import './App.css';
import { fetchPost } from './redux/slice/slice';

function App() {
  
  const dispatch = useDispatch();
  const contents = useSelector((state) => state.posts.content)
  const isLoading = useSelector((state) => state.posts.isLoading)
  const error = useSelector((state) => state.posts.error)

  useEffect(() => {
    console.log("Before dispatch", contents)
    dispatch(fetchPost())
    console.log("After dispatch", contents)

  }, [dispatch])


  return (

    <div className="App">
        {console.log("Body of apppppppppppp")}
      {contents.map((content)=>(
        <div key={content.id}>
        
          <h3>{content.title}</h3>
          <p>{content.body}</p>
        </div>
      ))}
      {isLoading && <h1>Data is loading</h1>}
      {error && <h1>Data is loading</h1>}
    </div>
  );
}

export default App;

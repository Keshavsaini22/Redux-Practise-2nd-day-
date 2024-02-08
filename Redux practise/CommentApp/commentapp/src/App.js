import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
 import { fetchComment } from './redux/slice/commentSlice';


function App() {
  const dispatch = useDispatch();
  const contents = useSelector((state) => state.comment.content)
  const isLoading = useSelector((state) => state.comment.isLoading)
  const error = useSelector((state) => state.comment.error)

  useEffect(() => {
    console.log("Before dispatch", contents)
    dispatch(fetchComment())
    console.log("After dispatch", contents)

  }, [dispatch])

  return (
    <div className="App">
    {console.log("Body of apppppppppppp")}
  {contents.map((content)=>(
    <div key={content.id}>
    
      <h3>{content.name}</h3>
      <h3>{content.email}</h3>

      
      <p>{content.body}</p>
    </div>
  ))}
  {isLoading && <h1>Data is loading</h1>}
  {error && <h1>Data is loading</h1>}
</div>
  );
}

export default App;

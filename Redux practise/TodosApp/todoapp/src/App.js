import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchTodo } from './redux/slice/todoSlice';


function App() {
  const dispatch = useDispatch();
  const contents = useSelector((state) => state.todo.content)
  const isLoading = useSelector((state) => state.todo.isLoading)
  const error = useSelector((state) => state.todo.error)
  useEffect(() => {
    console.log("Before dispatch", contents)
    dispatch(fetchTodo())
    console.log("After dispatch", contents)

  }, [dispatch])

  return (
    <div className="App">
        {console.log("Body of apppppppppppp")}
      {contents.map((content)=>(
        <div key={content.id}>
        
          <h3>{content.id}</h3>
          <p>{content.title}</p>
          {content.completed && <p>Done Task</p>}
        </div>
      ))}
      {isLoading && <h1>Data is loading</h1>}
      {error && <h1>Data is loading</h1>}
    </div>
  );
}

export default App;

import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { useEffect } from 'react';
import { fetchData } from './redux/slice/contentslice'
import {fetchSecData} from './redux/slice/secondSlice'


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSecData())
  }, [dispatch])

  const contents = useSelector((state) => state.content.content)
  const isLoading = useSelector((state) => state.content.isLoading)
  const error = useSelector((state) => state.content.error)

  if (isLoading) {
    return 'loading'
  }

  if (error) {
    return error
  }

  return (
    <div>
      {contents?.map((content) => (
        <div key={content.id}>
          <img src={`${content.thumbnailUrl}`} alt={`${content.title}`} />

        </div>
      ))}
    </div>
  );
}

export default App;

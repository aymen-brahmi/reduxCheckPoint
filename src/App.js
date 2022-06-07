import './App.css';
import {useSelector,useDispatch} from 'react-redux';
import {incrementHandler,decrementHandler,resetHandler} from './Redux/Actions';
function App() {
  const dispatch=useDispatch();
  const count=useSelector((state)=> state.counter );
  const plus=()=>{
    dispatch(incrementHandler())
  };
  const mines=()=>{
    dispatch(decrementHandler())
  };
  const reset=()=>{
    dispatch(resetHandler())
  };
  return (
    <div className="App">
      <br/>
      <br/>
      <button onClick={mines} >-</button>
      <h2>{count} </h2>
      <button onClick={plus}>+</button>
      <br/>
      <br/>
      <button onClick={reset} >Reset</button>
    </div>
  );
}

export default App;

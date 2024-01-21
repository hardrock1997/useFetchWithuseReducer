import './App.css';
import useFetch from './useFetch';

function App() {
  const state = useFetch();
  return (
    
    <div className="App">
   {state.loading && <h1>Loading...</h1>}
   {state.data && state.data.map((d,index)=>{
    return (
      <h3 key={index}>{d}</h3>
    )
   })}
    </div>
  );
}

export default App;

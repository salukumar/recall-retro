import { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import ListBoard from './ListBoard';

function App() {
  const [counter, setCounter] = useState(0)
  const [topScore, setTopScore] = useState(0)
  const [data, setData] = useState([]);    
  const [clickedImages, setClickedImages] = useState([]);

  
const FetchData = async () => {
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=10';
  const pokemonData = await (await fetch(url)).json(); 
  const pokemonDetails = await Promise.all(
    pokemonData.results.map(({url: pokemonUrl}) => fetch(pokemonUrl).then(res => res.json()))
  );
  const pokemonList = pokemonDetails.map(({id, name}) => ({id, name: name}));
  setData(pokemonList);
}

const HandleClick = (id) => {
  SetAndCheckClick(id);
 
 }

 const SetAndCheckClick = (id) => {
    if(clickedImages.includes(id)) {
        setCounter(0);
        setTopScore(counter);
        setClickedImages([]);
    } else {
        setCounter(prevCounter => prevCounter + 1);
        setClickedImages([...clickedImages, id]);
    }
    ShuffleData();
 }



 const ShuffleData = () => {
  for (let i = data.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [data[i], data[j]] = [data[j], data[i]];
  }
  return data;
 }


useEffect(() => {
    FetchData();
},[]);

  return (
    <div className="App">
    {data.length > 0 && (
      <>
       <Header  data={data} topScore={topScore}  counter={counter}/>
       <ListBoard  
        data={data}  setData={setData} 
        HandleClick={HandleClick} 
       />
    </>
    )}
   
    </div>
  );
}

export default App;

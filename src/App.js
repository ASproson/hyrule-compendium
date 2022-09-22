import './App.css';
import React from 'react'
import axios from 'axios'

const testUrl = 'https://botw-compendium.herokuapp.com/api/v2/entry/moblin'

axios.get(testUrl).then((response) => {
  console.log(response.data)
})

function App() {
  return (
    <div className="App">
      <h1 className='text-3xl'>Hello World</h1>
    </div>
  );
}

export default App;

import './App.css';
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const testUrl = 'https://botw-compendium.herokuapp.com/api/v2/category/monsters'
const sheikahSlate = require('./assets/SheikahSlate.png')

function App() {

  // const [data, setData] = useState()

  // useEffect(() => {
  //   axios.get(testUrl).then((response) => {
  //     setData(response.data.data)
  //   })
  // }, [])

  // console.log(data)

  // if(!data) <p>Loading...</p>

  return (
    // <div className="App">
    //   {data?.map((d) => {
    //     return (
    //       <div>
    //         <h1 className='capitalize'>{d.name}</h1>
    //         <img src={d.image} alt={d.name}/>
    //         <p>{d.description}</p>
    //         <p>{d.common_locations}</p>
    //         <p>{d.drops}</p>
    //       </div>
    //     )
    //   })}
    // </div>
    <div>
      <h1>Hello</h1>
      <div>
        <img src={sheikahSlate}/>
      </div>
    </div>
  );
}

export default App;

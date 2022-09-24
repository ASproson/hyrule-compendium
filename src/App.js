import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

const testUrl =
  "https://botw-compendium.herokuapp.com/api/v2/category/monsters";
const sheikahSlate = require("./assets/SheikahSlateUpscale.png");

const data = {
  category: "monsters",
  common_locations: ["Hyrule Field", "East Necluda"],
  description:
    "This heavyweight species of monster can be found all over Hyrule. They're physically very strong, their legs along strong enough to resist the force of a bomb blast. They're much more dangerous than the Bokoblins. In fact, Moblins have been known to pick up Bokoblins and throw them as makeshift projectile weapons.",
  drops: ["moblin horn", "moblin fang"],
  id: 108,
  image: "https://botw-compendium.herokuapp.com/api/v2/entry/moblin/image",
  name: "moblin",
};

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
    <div className="h-screen w-screen flex justify-center">
      <div className="flex justify-center ">
        <div className="-z-20">
          <img
            src={sheikahSlate}
            alt="sheikah slate"
            className="-rotate-90 h-[1000px] w-[600px] -z-10"
          />

          {/* Monster details */}
          <div className="-mt-[620px] z-40">
            <div className="flex">
              <img
                src={data.image}
                className="rounded-md h-[225px] w-[225px] -mt-4"
              />
              <div className="ml-5 -mt-6">
                <h1 className="capitalize font-bold text-2xl">{data.name}</h1>
                <div className="w-[400px] mt-2 break-words">
                  <p className="text-md italic">{data.description}</p>
                </div>
                <div className="flex mt-2 text-md">
                  Common locations:
                  {data.common_locations.map((locale) => {
                    return <p className="ml-2 capitalize">{locale}</p>;
                  })}
                </div>
                <h2 className="font-bold mt-4 text-xl">Drops</h2>
                <div className="flex mt-2 text-md capitalize space-x-6">
                  {data.drops.map((drops) => {
                    return (
                      <p className="text-white text-sm bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full p-3 cursor-pointer">
                        {drops}
                      </p>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import slate from "./assets/SheikahSlateUpscale.png";
import square from "./assets/square.png";


const testUrl =
  "https://botw-compendium.herokuapp.com/api/v2/category/monsters";
// const sheikahSlate = require("./assets/SheikahSlateUpscale.png")

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

    <div className="flex h-screen">
      <div className="m-auto">
        <div className="">
          <div
            className="flex"
            style={{
              backgroundImage: `url(${slate})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              height: 600,
              width: 1000,
            }}
          >
            {/* Monster Details */}
            <div className="mt-[150px]">
              <div className="flex ml-[200px]">
                <img
                  src={data.image}
                  className="rounded-md h-[200px] w-[200px] -mt-4"
                />
                <div className="ml-5 -mt-6">
                  <h1 className="capitalize font-bold text-2xl">{data.name}</h1>
                  <div className="w-[440px] mt-2 break-words">
                    <p className="text-md italic">{data.description}</p>
                  </div>
                  <div className="flex mt-2 text-md">
                    <h2 className="font-bold">Common locations:</h2>
                    {data.common_locations.map((locale) => {
                      return <p className="ml-2 capitalize">{locale}</p>;
                    })}
                  </div>
                  <h2 className="font-bold mt-2">Drops:</h2>
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
      <div className="w-full h-[35px] absolute bottom-0" style={{ backgroundImage: `url(${square})`}}>
      </div>
    </div>
  );
}

export default App;

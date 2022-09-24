import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import slate from "./assets/SheikahSlateUpscale.png";
import square from "./assets/square.png";
import { MdOutlinePlayArrow } from "react-icons/md";
import Header from "./components/Header";

const data = [
  {
    category: "monsters",
    common_locations: ["Hyrule Field", "East Necluda"],
    description:
      "This heavyweight species of monster can be found all over Hyrule. They're physically very strong, their legs along strong enough to resist the force of a bomb blast. They're much more dangerous than the Bokoblins. In fact, Moblins have been known to pick up Bokoblins and throw them as makeshift projectile weapons.",
    drops: ["moblin horn", "moblin fang"],
    id: 108,
    image: "https://botw-compendium.herokuapp.com/api/v2/entry/moblin/image",
    name: "moblin",
  },
  {
    category: "monsters",
    common_locations: ["Hyrule Field", "Hebra Mountains"],
    description:
      "These fearsome monsters have lived in Hyrule since ancient times. Their ability to breathe fire makes White-Maned Lynels among the toughest of the species; each one of their attacks is an invitation to the grave. There are so few eyewitness accounts of this breed because a White-Maned Lynel is not one to let even simple passersby escape with their lives.",
    drops: ["lynel horn", "lynel hoof", "lynel guts"],
    id: 123,
    image:
      "https://botw-compendium.herokuapp.com/api/v2/entry/white-maned_lynel/image",
    name: "white-maned lynel",
  },
  {
    category: "monsters",
    common_locations: null,
    description:
      "The lowest-ranked members of the Yiga Clan. They've been dispatched all across Hyrule with a single task: seek out Link and end his life. They're a crafty bunch, sometimes disguising themselves as simple travelers or villagers to get the jump on you. Be wary of suspicious people you encounter. They're very agile and carry a bow and one-handed sword.",
    drops: [
      "green rupee",
      "blue rupee",
      "red rupee",
      "purple rupee",
      "mighty bananas",
    ],
    id: 134,
    image:
      "https://botw-compendium.herokuapp.com/api/v2/entry/yiga_footsoldier/image",
    name: "yiga footsoldier",
  },
  {
    category: "monsters",
    common_locations: ["Divine Beast Vah Ruta"],
    description:
      "This phantom of Ganon attacked the Divine Beast Vah Ruta and was responsible for the demise of the Champion Mipha. It attacks with a spear and ice magic.",
    drops: [],
    id: 161,
    image:
      "https://botw-compendium.herokuapp.com/api/v2/entry/waterblight_ganon/image",
    name: "waterblight ganon",
  },
];

let counter = 0;

function App() {
  // const [data, setData] = useState()
  const [idx, setIdx] = useState(0);

  // useEffect(() => {
  //   axios.get(testUrl).then((response) => {
  //     console.log('calling...')
  //     setData(response.data.data)
  //   })
  // }, [])

  const handleClickForward = () => {
    if (counter < data.length - 1) {
      counter++;
    } else {
      counter = 0;
    }
    setIdx(counter);
  };

  const handleClickBackward = () => {
    if (counter > 0) {
      counter--;
    } else {
      counter = data.length - 1;
    }
    setIdx(counter);
  };

  const handleItemClick = () => {
    console.log("clicked!");
  };

  if (!data) return <p>Loading...</p>;

  if (data) {
    console.log([data.length, idx, counter]);
    console.log([data[idx].name]);
  }

  return (
    <div className="flex h-screen">
      <Header />
      <div className="m-auto">
        <div className="mt-[100px]">
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
                  src={data[idx].image}
                  alt={data[idx].name}
                  className="rounded-md h-[200px] w-[200px] -mt-4"
                />
                <div className="ml-5 -mt-10">
                  <h1 className="capitalize font-bold text-2xl">
                    {data[idx].name}
                  </h1>
                  <div className="w-[440px] mt-2 break-words h-[150px]">
                    <p className="text-md italic">{data[idx].description}</p>
                  </div>
                  <div className="flex text-md mt-6">
                    <h2 className="font-bold">Common locations:</h2>
                    <div>
                      {data[idx].common_locations === null ? (
                        <p className="ml-2">Unknown</p>
                      ) : (
                        <div>
                          {data[idx].common_locations.map((locale) => {
                            return (
                              <span key={locale} className="ml-2 capitalize">
                                {locale}
                              </span>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </div>
                  <h2 className="font-bold mt-2">Drops:</h2>
                  <div className="flex mt-2 text-md capitalize space-x-6">
                    {data[idx].drops === null ? (
                      <p className="ml-2">Unknown</p>
                    ) : (
                      <div className="flex space-x-6">
                        {data[idx].drops.slice(0, 5).map((drops) => {
                          return (
                            <div
                              key={drops}
                              onClick={handleItemClick}
                              className="text-white text-sm bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full p-3 cursor-pointer -ml-[190px] transition hover:scale-110 ease-in-out"
                            >
                              {drops}
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Carousel buttons */}
            <div className="absolute mt-[237px] ml-[140px] w-[800px] flex justify-between">
              <div className="">
                <button onClick={handleClickBackward}>
                  <MdOutlinePlayArrow className="h-[60px] w-[60px] text-cyan-500 rotate-180 transition hover:scale-125 ease-in-out" />
                </button>
              </div>

              <div className="">
                <button onClick={handleClickForward}>
                  <MdOutlinePlayArrow className="h-[60px] w-[60px] text-cyan-500 transition hover:scale-125 ease-in-out" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-full h-[35px] absolute top-0 rotate-180"
        style={{ backgroundImage: `url(${square})` }}
      ></div>
      <div
        className="w-full h-[35px] absolute bottom-0"
        style={{ backgroundImage: `url(${square})` }}
      ></div>
    </div>
  );
}

export default App;

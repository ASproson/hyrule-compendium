import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import slate from "./assets/SheikahSlateUpscale.png";
import triforce from "./assets/triforce.png";

import { MdOutlinePlayArrow } from "react-icons/md";
import Header from "./components/Header";
import MonsterDetails from "./components/MonsterDetails";

const apiUrl = "https://botw-compendium.herokuapp.com/api/v2/category/monsters";

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
  //   axios.get(apiUrl).then((response) => {
  //     console.log('calling...')
  //     setData(response.data.data)
  //   }).catch((err) => {
  //     console.log(err)
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

  if (!data) return <p>Loading...</p>;

  if (data) {
    console.log([data.length, idx, counter]);
    console.log([data[idx].name]);
  }

  return (
    <div className="flex h-screen">
      <Header />
      <div className="m-auto">
        <div className="mt-[110px]">
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
            <MonsterDetails data={data} idx={idx} />

            {/* Carousel buttons */}
            <div className="absolute mt-[240px] ml-[140px] w-[800px] flex justify-between">
              <div className="">
                <button onClick={handleClickBackward}>
                  <MdOutlinePlayArrow className="h-[60px] w-[60px] text-cyan-500 rotate-180 transition hover:scale-125 ease-in-out animate-pulse" />
                </button>
              </div>

              <div className="">
                <button onClick={handleClickForward}>
                  <MdOutlinePlayArrow className="h-[60px] w-[60px] text-cyan-500 transition hover:scale-125 ease-in-out animate-pulse" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-full h-[90px] absolute top-0 rotate-180"
        style={{ backgroundImage: `url(${triforce})` }}
      ></div>
      <div
        className="w-full h-[90px] absolute bottom-0"
        style={{ backgroundImage: `url(${triforce})` }}
      ></div>
    </div>
  );
}

export default App;

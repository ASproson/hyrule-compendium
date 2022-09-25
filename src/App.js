import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import slate from "./assets/SheikahSlateUpscale.png";
import Header from "./components/Header";
import MonsterDetails from "./components/MonsterDetails";
import Carousel from "./components/Carousel";
import Banner from "./components/Banner";
import MonsterDetailsMobile from "./components/MonsterDetailsMobile";

const apiUrl = "https://botw-compendium.herokuapp.com/api/v2/category/monsters";

let counter = 0;

function App() {
  const [data, setData] = useState();
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => {
        console.log("calling...");
        setData(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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

  if (!data)
    return (
      <div>
        <h1 className="font-zelda text-[100px] text-center mt-[100px]">
          Loading...
        </h1>
      </div>
    );

  return (
    <div className="flex h-screen">
      <div className="hidden sm:visible sm:block">
        <Header />
      </div>
      <div className="m-auto">
        <div className="mt-[110px]">
          {/* Desktop View */}
          <div className="hidden md:visible md:flex">
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
              <MonsterDetails data={data} idx={idx} />

              <div className="absolute mt-[240px] ml-[140px] w-[800px] flex justify-between">
                <Carousel
                  handleClickBackward={handleClickBackward}
                  handleClickForward={handleClickForward}
                />
              </div>
            </div>
          </div>

          {/* Mobile View */}
          <div className="md:hidden">
            <MonsterDetailsMobile
              data={data}
              idx={idx}
              handleClickBackward={handleClickBackward}
              handleClickForward={handleClickForward}
            />
          </div>
        </div>
      </div>
      <Banner />
    </div>
  );
}

export default App;

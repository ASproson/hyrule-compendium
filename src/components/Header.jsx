import React from "react";

const Header = () => {
  return (
    <div className="absolute mt-[90px] w-full left-0 right-0 ml-auto mr-auto text-center">
      <h1 className="font-zelda text-[100px] ">Hyrule Compendium</h1>
      <div className="-mt-[10px] w-[500px] absolute left-0 right-0 ml-auto mr-auto">
        <p className="mb-4">Welcome!</p>
        <p className="mb-4">
          This demo project renders data from a free online web API that stores
          data from the video game{" "}
          <span className="italic">Legend of Zelda: Breath of the Wild</span>
        </p>
        <p>
          Clicking on the left or right arrows will cycle through the data and
          present various facts about the monsters crawling across Hyrule!
        </p>
      </div>
    </div>
  );
};

export default Header;

import React from "react";

const Header = () => {
  return (
    <div className="absolute mt-[120px] w-full left-0 right-0 ml-auto mr-auto text-center">
      <h1 className="font-zelda text-[50px] sm:text-[70px] lg:text-[100px]">Hyrule Compendium</h1>
      <div className="-mt-[10px] w-[400px] md:w-[500px] absolute left-0 right-0 ml-auto mr-auto">
        <p className="mb-4">Welcome...</p>
        <p className="mb-4">
          Clicking on the left or right arrows in the Sheikah slate will cycle through the data and
          present various facts about the monsters crawling across Hyrule as seen in the <span className="italic">Legend of Zelda: Breath of the Wild!</span>
        </p>
      </div>
    </div>
  );
};

export default Header;

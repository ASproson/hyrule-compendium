import React from "react";

const MonsterDetailsMobile = ({ data, idx }) => {
  return (
    <div className="border-[4px] border-[#ffcc67] rounded-md ml-6 mr-6 pb-6 pt-6 pl-8 pr-8">
      <h1 className="capitalize font-bold text-2xl text-center pb-4">
        {data[idx].name}
      </h1>

      <div className="flex justify-center pb-8">
        <img
          src={data[idx].image}
          alt={data[idx].name}
          className="rounded-md h-[200px] w-[200px]"
        />
      </div>

      <div className="flex justify-center">
        <p className="text-md italic pb-4">{data[idx].description}</p>
      </div>

      <h2 className="font-bold">Common locations:</h2>
      <div className="pb-4">
        {data[idx].common_locations === null ? (
          <p className="ml-2">Unknown</p>
        ) : (
          <div className="space-x-3 capitalize">
            {data[idx].common_locations.map((locale) => {
              return <span key={locale}>{locale}</span>;
            })}
          </div>
        )}
      </div>
      <h2 className="font-bold mt-2">Drops:</h2>
      <div className="flex mt-2 text-md capitalize space-x-6 pb-4">
        {data[idx].drops === null ? (
          <p className="ml-2">Unknown</p>
        ) : (
          <div className="flex space-x-6">
            {data[idx].drops.slice(0, 4).map((drops) => {
              return (
                <div
                  key={drops}
                  className="text-gray-500 font-bold text-sm bg-gradient-to-r from-[#ffdb94] to-[#ffcc67] rounded-full p-3 cursor-pointer transition hover:scale-110 ease-in-out"
                >
                  {drops}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default MonsterDetailsMobile;

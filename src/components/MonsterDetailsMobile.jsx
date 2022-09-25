import React from "react";

const MonsterDetailsMobile = ({ data, idx }) => {
  return (
    <div>
      <img src={data[idx].image} alt={data[idx].name} className="rounded-md" />
      <h1 className="capitalize">{data[idx].name}</h1>
      <p>{data[idx].description}</p>
      <h2>Common locations:</h2>
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
      <h2 className="font-bold mt-2">Drops:</h2>
      <div className="flex mt-2 text-md capitalize space-x-6">
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

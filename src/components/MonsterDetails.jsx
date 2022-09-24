import React from "react";

const MonsterDetails = ({ data, idx }) => {
  return (
    <div>
      <div className="mt-[150px]">
        <div className="flex ml-[200px]">
          <img
            src={data[idx].image}
            alt={data[idx].name}
            className="rounded-md h-[200px] w-[200px] -mt-4"
          />
          <div className="ml-5 -mt-10">
            <h1 className="capitalize font-bold text-2xl">{data[idx].name}</h1>
            <div className="w-[440px] break-words h-[150px]">
              <p className="text-md italic">{data[idx].description}</p>
            </div>
            <div className="flex text-md mt-5">
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
                  {data[idx].drops.slice(0, 4).map((drops) => {
                    return (
                      <div
                        key={drops}
                        className="text-gray-500 font-bold text-sm bg-gradient-to-r from-[#ffdb94] to-[#ffcc67] rounded-full p-3 cursor-pointer -ml-[180px] transition hover:scale-110 ease-in-out"
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
    </div>
  );
};

export default MonsterDetails;

import React, { useEffect, useState } from "react";
import SingleParts from "./SingleParts";

const Accessories = () => {
  const [accessories, setAccessories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/parts")
      .then((res) => res.json())
      .then((data) => setAccessories(data));
  }, []);

  // search engine box
  const [filter, setFilter] = useState("");
  const searchText = (event) => {
    setFilter(event.target.value);
  };
  console.warn(filter);

  let dataSearch = accessories.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filter.toString().toLowerCase())
    );
  });
  return (
    <div>
      <div class="form-control d-flex justify-center items-center">
        <label className="font-bold mb-2 text-3xl" htmlFor="">
          Search
        </label>
        <input
          type="text"
          placeholder="Search Cycle Parts"
          class="input input-bordered font-bold bg-orange-100 input-secondary w-full max-w-xs"
          value={filter}
          onChange={searchText.bind(this)}
        />
      </div>{" "}
      <br></br>
      <div class="grid  container mx-auto md:grid-cols-2 sm:grid-cols-1  lg:grid-cols-5 gap-4">
        {dataSearch.map((accessories) => (
          <SingleParts
            key={accessories._id}
            accessories={accessories}
            setAccessories={setAccessories}
          ></SingleParts>
        ))}
      </div>
    </div>
  );
};

export default Accessories;

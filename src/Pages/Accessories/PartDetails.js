import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PartDetails = () => {
  const { partDetailsID } = useParams();

  const [partsi, setPartsi] = useState({});
  console.log(partsi);

  useEffect(() => {
    const url = `http://localhost:4000/parts/${partDetailsID}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPartsi(data));
  }, []);

  return (
    <div>
      <div class="hero text-left mb-28 bg-amber-300">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img src={partsi.img} class="max-w-lg rounded-lg shadow-2xl" />
          <div>
            <h1 class="text-5xl pb-4 font-bold">{partsi.name}</h1>
            <h1 class="text-2xl font-bold">Price : {partsi.oldPrice}</h1>
            <h1 class="text-3xl font-bold"> Quantity : {partsi.newPrice}</h1>

            <p class="py-6">{partsi.description}</p>
            <button class="btn btn-neutral">Contact</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartDetails;

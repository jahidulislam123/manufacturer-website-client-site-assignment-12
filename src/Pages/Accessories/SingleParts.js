import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const SingleParts = ({ accessories, setAccessories }) => {
  const { _id, name, img, description, oldPrice, newPrice } = accessories;
  const details = description.slice(0, 50);

  const navigate = useNavigate();

  const navigateToPartDetails = (_id) => {
    navigate(`/partDetails/${_id}`);
  };

  return (
    <div class="card relative w-64 bg-base-100 shadow-xl">
      <figure class="px-10 pt-2 pb-2">
        <img src={img} alt="Shoes" class="rounded-xl" />
      </figure>
      <div class="text-left px-10">
        {" "}
        <strong>{details}</strong> <br></br>
        <strong class="text-cyan-400">{name}</strong> <br></br>
        <s>$ {oldPrice}</s> <br></br>
        <strong class="text-rose-600 text-2xl">${newPrice}</strong>
        <div class="flex ">
          <img
            src={"https://i.ibb.co/hsNbFnr/213499-200.png"}
            class="w-6 rounded-lg hover:bg-green-600 r- "
          />
          <h1 class="font-bold text-green-600 ml-1.5">In Stock</h1>
        </div>
        <br></br> <br></br>
        <div>
          <button
            onClick={() => navigateToPartDetails(_id)}
            class="btn absolute btn-neutral btn-sm font-bold w-full bottom-0 "
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleParts;

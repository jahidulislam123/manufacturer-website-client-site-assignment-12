import React, { useEffect, useState } from "react";
import SingleParts from "./SingleParts";

const Accessories = () => {
  const [accessories, setAccessories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/parts")
      .then((res) => res.json())
      .then((data) => setAccessories(data));
  }, []);
  return (
    <div class="grid grid-cols-5 container mx-auto gap-4">
      {accessories.map((accessories) => (
        <SingleParts
          key={accessories._id}
          accessories={accessories}
          setAccessories={setAccessories}
        ></SingleParts>
      ))}
    </div>
  );
};

export default Accessories;

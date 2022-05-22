import React from 'react';

const SingleTools = ({tool}) => {
    const {name,img,minimumOrderQuantity,price,available,description}=tool;
    const details =description.slice(0,50);
    return (
        <div className=' text-left '>
            <div class="card card-compact  bg-base-100 shadow-xl">
  <figure><img src={img} alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">{name}</h2>
    <p>Price: ${price}</p>
    <p>available: ${available}</p>
    <p>mininimum order: ${minimumOrderQuantity}</p>
    <p>{details}</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Book</button>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default SingleTools;
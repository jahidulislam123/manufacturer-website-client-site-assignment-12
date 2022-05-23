import React from 'react';

const SingleTools = ({tool,setParts}) => {
    const {name,img,minimumOrderQuantity,price,available,description}=tool;
    const details =description.slice(0,50);
    return (
        <div className=' text-left '>
            <div className="card card-compact  bg-base-100 shadow-xl">
  <figure><img src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>Price: ${price}</p>
    <p>available: ${available}</p>
    <p>mininimum order: ${minimumOrderQuantity}</p>
    <p>{details}</p>
    <div className="card-actions justify-end">
     
      <label for="purchase-modal" 
      onClick={()=>setParts(tool)}
      class="btn btn-primary text-white uppercase">Book Now</label>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default SingleTools;
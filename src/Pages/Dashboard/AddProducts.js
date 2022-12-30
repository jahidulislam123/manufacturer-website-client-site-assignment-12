import React from 'react';
import { toast } from 'react-toastify';

const AddProducts = () => {

    const handleaddproducts =event =>{
        event.preventDefault();
        const name=event.target.two.value;
        const price=event.target.three.value;
        const img=event.target.four.value;
        const description=event.target.five.value;
        const minimumOrderQuantity=event.target.six.value;
        const available=event.target.seven.value;
        console.log(name,price,img,description,minimumOrderQuantity,available);

        const booking3 ={
            name:name,
            price:price,
            img:img,
            description:description,
            minimumOrderQuantity:minimumOrderQuantity,
            available:available


        }
        fetch('https://bicycle-server.vercel.app/tools',{
                method :'POST',
                headers: {
                    'content-type':'application/json'
                },
                body:JSON.stringify(booking3)
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                toast.success('you have added successfully')
               
            })
    }

    return (
        <div>
            <h2 className='text-2xl text-center font-bold text-black'>Please add a products</h2>

            <form   className='flex flex-col justify-center items-center' onSubmit={handleaddproducts}>
            <input name='two' type="text" placeholder="Type Product name" class="input input-bordered my-2 input-primary w-full max-w-xs" />
            <input name='three' type="number" placeholder="add a price" class="input input-bordered my-2 input-primary w-full max-w-xs" />
            <input name='four' type="text" placeholder="give a url of image" class="input input-bordered  my-2 input-primary w-full max-w-xs" />
            <input name='five' type="text" placeholder="give a short description" class="input input-bordered my-2 input-primary w-full max-w-xs" />
            <input name='six' type="number" placeholder="minimumOrderQuantity" class="input input-bordered my-2 input-primary w-full max-w-xs" />
            <input name='seven' type="number" placeholder="available" class="input input-bordered my-2 input-primary w-full max-w-xs" />
            <input  type="submit" value="Add Product" class="btn text-white font-bold  btn-primary w-full max-w-xs" />

            </form>

        </div>
    );
};

export default AddProducts;
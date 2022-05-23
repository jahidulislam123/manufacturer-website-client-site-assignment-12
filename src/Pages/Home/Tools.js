import React, { useEffect, useState } from 'react';
import SingleTools from './SingleTools';

const Tools = () => {
    const [tools,setTools]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/tools')
        .then(res=>res.json())
        .then(data=>setTools(data));
    },[])
    return (
        <div>
           
            <div className='grid my-5 my-24  mx-8 md:grid-cols-2 sm:grid-cols-1  lg:grid-cols-3 gap-4'>
            {
                tools.map(tool=> <SingleTools
                key={tool._id}
                tool={tool}
                ></SingleTools> )
            }
            </div>
        </div>
    );
};

export default Tools;
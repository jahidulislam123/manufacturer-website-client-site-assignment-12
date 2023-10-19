import React, { useEffect, useState } from 'react';
import Purchase from './Purchase';
import SingleTools from './SingleTools';

const Tools = () => {
 //
const [parts,setParts]=useState(null);

 //


    const [tools,setTools]=useState([]);
    useEffect(()=>{
        fetch('https://manufacturer-website-server-site-assignment-12.vercel.app/tools')
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
                setParts={setParts}
                ></SingleTools> )
            }
            </div>
            {
                parts && <Purchase parts={parts}
                setParts={setParts}
                ></Purchase>
            }
        </div>
    );
};

export default Tools;
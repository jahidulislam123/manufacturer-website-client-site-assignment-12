import React from 'react';

const Blogs = () => {
    return (
        <div className='text-left bg-slate-200 rounded-box mx-7'>
           <div className='bg-slate-500 my-7 rounded-box p-8 text-white'>
               <h3 className='text-2xl font-bold '>Q:  How will you improve the performance of a React Application?</h3>
               <h3>Ans: 1: Keeping component state local where necessary. <br />
                        2:  Memoizing React components to prevent unnecessary re-renders. <br />
                        3:  Code-splitting in React using dynamic import() <br />
                        4:  Windowing or list virtualization in React. <br />
                        5:  Lazy loading images in React.</h3>
           </div>
           <div className='bg-slate-500 my-7 rounded-box p-8 text-white'>
               <h3 className='text-2xl font-bold '>Q: What are the different ways to manage a state in a React application? </h3>
               <h3>Ans: There are several other ways to manage state​s in React, including the use of: <br />
                Hooks. <br />
                React Context API. <br />
                Apollo Link State.</h3> <br />
           </div>
           <div className='bg-slate-500 my-7 rounded-box p-8 text-white'>
               <h3 className='text-2xl font-bold '>Q: How does prototypical inheritance work?</h3>
               <h3>Ans: JavaScript objects are dynamic "bags" of properties (referred to as own properties). JavaScript objects have a link to a prototype object. When trying to access a property of an object, the property will not only be sought on the object but on the prototype of the object, the prototype of the prototype, and so on until either a property with a matching name is found or the end of the prototype chain is reached.
                   </h3>
           </div>
           <div className='bg-slate-500 my-7 rounded-box p-8 text-white'>
               <h3 className='text-2xl font-bold '>Q:  You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h3>
               <h3>Ans: First  and foremost i will make a api in backend site . after that i will declare a state in the client site . in this client sites state i will set like products and setProducts .
                   and than fetch url and response and data check .. if data name ==== name which is related with id .than it is easy to find every property of this objects .
               </h3>
           </div>
           <div className='bg-slate-500 my-7 rounded-box p-8 text-white'>
               <h3 className='text-2xl font-bold '>Q: What is a unit test? Why should write unit tests?</h3>
               <h3>Ans: Unit tests are typically automated tests written and run by software developers to ensure that a section of an application (known as the "unit") meets its design and behaves as intended. In procedural programming, a unit could be an entire module, but it is more commonly an individual function or procedure.
               Unit testing finds problems early in the development cycle. This includes both bugs in the programmer's implementation and flaws or missing parts of the specification for the unit. The process of writing a thorough set of tests forces the author to think through inputs, outputs, and error conditions, and thus more crisply define the unit's desired behavior. The cost of finding a bug before coding begins or when the code is first written is considerably lower than the cost of detecting, identifying, and correcting the bug later. Bugs in released code may also cause costly problems for the end-users of the software.[8][9][10] Code can be impossible or difficult to unit test if poorly written, thus unit testing can force developers to structure functions and objects in better ways.

               </h3>
           </div>
          
        </div>
    );
};

export default Blogs;
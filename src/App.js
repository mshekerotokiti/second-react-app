import React, { useState } from 'react';
import image from './sharon.jpg';
import Blog from './components/Blog';

function App (){
const [blog, setBlog] = useState("");
function blog(info){
  setBlog(info);
}

    return (
      <div>
        <img className='center'
        src= {image}
        alt="tokiti" />
        < Header name="My Information" info={blog}/>
        <h2> What you don't know about me</h2>
        < Blog />


        <>
          <button onClick={incrementCount}
          style = {{color: "blue"}}
          >Click me!</button>

        </>

      </div>
      
      
    );
  }

export default App;


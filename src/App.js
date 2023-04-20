import React, { useState } from 'react';
import image1 from './flowers/Blue-Flowers.jpg';
import image2 from './flowers/bouquet-roses-17514774.jpg';
import image3 from './flowers/purple-flower.webp';

function App (){
const [flowers, setFlowers] = useState("");

function getInfo(info){
  setFlowers(info);
}

    return (
      <div>
        <h1>Flowers Edition</h1>
        <h4>Click on the image to see flower description</h4>
        <ul className='flower'>
          <li><BlueFlower name="Cornflower" details={getInfo}/></li>
          <li><RoseBouquet name="Rose Bouquet" details={getInfo}/></li>
          <li><PurpleFlower name="Purple flower" details={getInfo}/></li>
        </ul>
        <p>{flowers}</p>
      </div>
      
      
    );
  }

  function BlueFlower(props){
     function handleClick(event){
      event.preventDefault();
      alert("Cornflowers were mentioned in folklore as a romantic symbol for young men pining over their special someone")
     }
     return(
      <div>
         <h3>{props.name} </h3>
        <img src={image1} style= {{width:"50%"}} onClick={handleClick}/>
      </div>
     )
  }

  function RoseBouquet (props) {

    function handleClick(event) {
      event.preventDefault();   
      alert("Roses are Red");
  
    }
  
    return (
      <div>
      <h3>{props.name} </h3>
      <img src={image2}  style= {{width:"50%"}} alt="rose" onClick={handleClick}/>
      </div>
    );
  }

  function PurpleFlower (props) {

    function handleClick(event) {
      event.preventDefault();   
      alert("purple flowers ");
  
    }
  
    return (
      <div>
      <h3>{props.name} </h3>
      <img src={image3} style= {{width:"50%"}}alt="purpleflower" onClick={handleClick}/>
      </div>
    );
  }

export default App;


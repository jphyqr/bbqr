import loadable from "@loadable/component";
import { Link } from "gatsby";

import React, { useEffect, useState } from "react";
import { useStore } from "react-redux";
import VerticalSpacer from "../layout/VerticalSpacer";

import "../styles/index.css";

const MenuLayout= loadable(()=>import("../layout/MenuLayout"));

function Index({data}) {
  console.log(data)
  const [date, setDate] = useState(null);
  useEffect(() => {
    async function getDate() {
      const res = await fetch("/api/date");
      const newDate = await res.text();
      setDate(newDate);
    }
    getDate();
  }, []);

  
  const store = useStore()
  const state = store.getState()
  console.log({state})


  return (
   <MenuLayout>
   
      <h1>ribsket</h1>

<h3>14th and Hamilton</h3>
<VerticalSpacer height="20"/>
      <div className="background-img"  alt="brisket in regina" />

<div className="menu">
<Link to="/menu">
    <div className="menu-item">Menu</div></Link>
 <Link to="/about">
 <div className="menu-item">About</div>
   </Link>


</div>


<VerticalSpacer height="20"/>
<h2>Texas Style BBQ in downtown Regina</h2>
<VerticalSpacer height="10"/>
<p>Ribsket is ... Ribs + Brisket with a variety of elevated sides that mix central Texas with Saskatchewan comfort. </p>
<VerticalSpacer height="20"/>
<h2>The Pit</h2>
<VerticalSpacer height="10"/>
<p> Our 500 gallon offset smoker was repurposed from a local farm, and fabricated in Saskatchewan. It is designed to have the most consistent draw and produce the cleanest burn.</p>


     <style jsx>{`
     
     .menu{
       width: 100%;
       display:flex;
       justify-content: space-evenly;
    
       padding: 10px;
       background-color: black;
     }
     .menu-item{
       padding: 5px 10px 5px 10px;
       background-color: yellow;
       
       color: red;
      
     }

     .menu-item:hover{
      color: white;
      background-color:orange;  
      transition: .2s all ease;
     }


     @media only screen and (max-width: 400px) {
      .background-img{
        width: 100vw;
        height: 200px;
       background-image: url(plate.png);
       background-size: cover;
       background-repeat:no-repeat;
       background-position: center center;
      }}
      @media only screen and (min-width: 400px) {
        .background-img{
          width: 100vw;
          height: 400px;
         background-image: url(plate.png);
         background-size: cover;
         background-repeat:no-repeat;
         background-position: center center;
        }
  }
     `}</style>
      </MenuLayout>
  );
}

export default Index;

//add image 




import loadable from "@loadable/component";
import { Link } from "gatsby";

import React, { useEffect, useState } from "react";
import { useStore } from "react-redux";
import VerticalSpacer from "../layout/VerticalSpacer";

import "../styles/index.css";
//test
const MenuLayout = loadable(() => import("../layout/MenuLayout"));

function Index({ data }) {
  console.log(data);
  const [date, setDate] = useState(null);
  useEffect(() => {
    async function getDate() {
      const res = await fetch("/api/date");
      const newDate = await res.text();
      setDate(newDate);
    }
    getDate();
  }, []);

  const store = useStore();
  const state = store.getState();
  console.log({ state });

  return (
    <MenuLayout>
      <h1>The Chuckwagon</h1>
      <h3>Open May 1st, 2021</h3>
      <h3>14th and Hamilton</h3>
      <VerticalSpacer height='20' />
      <div className='background-img' alt='brisket in regina' />

      <div className='menu'>
        <Link to='/menu'>
          <div className='menu-item'>Menu</div>
        </Link>
        <Link to='/about'>
          <div className='menu-item'>About</div>
        </Link>
      </div>

      <VerticalSpacer height='20' />
      <h2>Icecream and More in Downtown Regina</h2>
      <VerticalSpacer height='10' />
      <p>
        The closest ice cream to Wascana Park, Victoria Park and Central Park
      </p>
      <VerticalSpacer height='20' />

      <style jsx>{`
        .menu {
          width: 100%;
          display: flex;
          justify-content: space-evenly;

          padding: 10px;
          background-color: black;
        }
        .menu-item {
          padding: 5px 10px 5px 10px;
          background-color: yellow;

          color: red;
        }

        .menu-item:hover {
          color: white;
          background-color: orange;
          transition: 0.2s all ease;
        }

        @media only screen and (max-width: 400px) {
          .background-img {
            width: 100vw;
            height: 200px;
            background-image: url(icecream.png);
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center center;
          }
        }
        @media only screen and (min-width: 400px) {
          .background-img {
            width: 100vw;
            height: 400px;
            background-image: url(plate.png);
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center center;
          }
        }
      `}</style>
    </MenuLayout>
  );
}

export default Index;

//add image

import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import SEO from "../components/seo";
import "../styles/index.css";

function Index() {
  const [date, setDate] = useState(null);
  useEffect(() => {
    async function getDate() {
      const res = await fetch("/api/date");
      const newDate = await res.text();
      setDate(newDate);
    }
    getDate();
  }, []);
  return (
    <main >
      <SEO 
      title="BBQR Home"
      description="BBQ in Regina SK"
      image="/500gal.png"
      article="null"
      />
      <h1>BBQR</h1>
      <h2>
        Central Style BBQ in downtown Regina
      </h2>
      <p>
       We are bringing central texas style barbacue to 2167 Hamilton Street.  This style of cooking involves slowly smoking cuts of meat (Brisket, Ribs, Chickens, Turkeys) in a specially designed smoker that produces the cleanest fire, a salivating aroma, and the most tender, juicy and flavourful meal you can imagine.
      </p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
      <br />
      <h2>The date according to Node.js (TypeScript) is:</h2>
      {/* <p>{date ? date : "Loading date..."}</p> */}
    </main>
  );
}

export default Index;

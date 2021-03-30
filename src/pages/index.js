import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
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
      <Helmet
       htmlAttributes={{
        lang: 'en',
      }}
      >
        <title>{`BBQR${process.env.NODE_ENV==="development"?"-DEV":""}` }

        </title>
      </Helmet>
      <h1>BBQR</h1>
      <h2>
        Central Style BBQ in downtown Regina
      </h2>
      <p>
       We are bringing central texas style barbacue to 2167 Hamilton Street.  This style of cooking involves slowly smoking cuts of meat (Brisket, Ribs, Chickens, Turkeys) in a specially designed smoker that produces the cleanest fire, a salivating aroma, and the most tender, juicy and flavourful meal you can imagine.
      </p>
      <br />
      <h2>The date according to Node.js (TypeScript) is:</h2>
      {/* <p>{date ? date : "Loading date..."}</p> */}
    </main>
  );
}

export default Index;

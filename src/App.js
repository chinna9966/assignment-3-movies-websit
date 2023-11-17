import "./styles.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/cardl";
import Top from "./components/topbar/topb";
import Foot from "./components/footer/footl";

const Movie = () => {
  const [cardData, SetcardData] = useState([]);
  const [cardDataN, SetcardDataN] = useState([]);

  useEffect(() => {
    axios.get("https://www.omdbapi.com/?apikey=45f0782a&s=war").then((res) => {
      SetcardData(res.data.Search);
      SetcardDataN(res.data.Search);
    });
  }, []);

  return (
    <div>
      <Top
        searchV={(val) =>
          SetcardData(
            cardDataN.filter(({ Title }) => Title.toLowerCase().includes(val))
          )
        }
      />
      <section className="cardC">
        {cardData.map((a, b) => (
          <Card {...a} />
        ))}
      </section>
      <Foot />
    </div>
  );
};

export default Movie;

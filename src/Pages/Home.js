import React, { useState, useEffect } from "react";
import GetDataByName from "../Components/GetDataByName";
import Header from "../Components/Header";
import NavigationActions from "../Components/NavigationActions";
import SearchByGeneration from "../Components/SearchByGeneration";

function Home() {
  const [initialData, setInitialData] = useState([]);
  const [newGeneration, setNewGeneration] = useState([]);
  const [generation, setGeneration] = useState(null);

  // for initial Data
  useEffect(() => {
    const getInitialData = async () => {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
      const newResponse = await response.json();
      setInitialData(newResponse.results);
    };

    getInitialData();
  }, []);

  // for getting the generation
  useEffect(() => {
    const getInitialData = async () => {
      if (generation !== null) {
        const response = await fetch(
          `https://pokeapi.co/api/v2/generation/${generation}/`
        );
        const newResponse = await response.json();

        setNewGeneration(newResponse.pokemon_species);
      }
    };

    getInitialData();
  }, [generation]);

  const getGenerationHandler = async (data) => {
    setGeneration(data);
    setNewGeneration([]);
  };

  return (
    <>
      <Header />
      <div className="container">
        <NavigationActions />
        <SearchByGeneration generationhandler={getGenerationHandler} />
        <ul className="ul-card">
          {!generation
            ? initialData?.map((item, index) => {
                return <GetDataByName key={index} name={item.name} />;
              })
            : newGeneration?.map((item, index) => {
                return <GetDataByName key={index} name={item.name} />;
              })}
        </ul>
      </div>
    </>
  );
}

export default Home;

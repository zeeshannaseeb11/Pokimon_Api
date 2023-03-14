import React, { useState, useEffect } from "react";
import GetDataByName from "../Components/GetDataByName";
import Header from "../Components/Header";
import NavigationActions from "../Components/NavigationActions";
import SearchByGeneration from "../Components/SearchByGeneration";
import useLoader from "../hooks/useLoader";
import "./Home.css";

function Home() {
  const [initialData, setInitialData] = useState([]);
  const [newGeneration, setNewGeneration] = useState([]);
  const [generation, setGeneration] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [loader, isLoading, setIsLoading] = useLoader();

  // for initial Data
  useEffect(() => {
    const getInitialData = async () => {
      setIsLoading(true);
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
      const newResponse = await response.json();
      setInitialData(newResponse.results);
      setIsLoading(false);
    };
    getInitialData();
  }, []);

  // for getting the generation
  useEffect(() => {
    const getInitialData = async () => {
      if (generation !== null) {
        setIsLoading(true);
        const response = await fetch(
          `https://pokeapi.co/api/v2/generation/${generation}/`
        );
        const newResponse = await response.json();

        setNewGeneration(newResponse.pokemon_species);
        setIsLoading(false);
      }
    };

    getInitialData();
  }, [generation]);

  const getGenerationHandler = async (data) => {
    setGeneration(data);
    setNewGeneration([]);
    setCurrentPage(1);
  };

  // function for changing the page number and  adding pagination
  function handlePageChange(pageNumber) {
    setCurrentPage(pageNumber);
  }
  const cardsPerPage = 8;
  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;

  return (
    <>
      <Header />
      <div className="container">
        <NavigationActions />
        <SearchByGeneration generationhandler={getGenerationHandler} />
        {loader}
        <ul className="ul-card">
          {!generation
            ? initialData?.slice(startIndex, endIndex).map((item, index) => {
                return <GetDataByName key={index} name={item.name} />;
              })
            : newGeneration?.slice(startIndex, endIndex).map((item, index) => {
                return <GetDataByName key={index} name={item.name} />;
              })}
        </ul>
        <div className="pagination">
          {Array.from(
            { length: Math.ceil(initialData?.length / cardsPerPage) },
            (_, i) => i + 1
          ).map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={currentPage === page ? "selected pagi-btn" : ""}
            >
              {page}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;

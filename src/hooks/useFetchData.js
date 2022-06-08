import { useState, useEffect } from 'react';

function useFetchData() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

  useEffect(() => {
    const fetchPlanets = async () => {
      setIsLoading(true);
      const response = await fetch(URL);
      const planetsData = await response.json();
      setData(planetsData.results);
      setIsLoading(false);
    };
    fetchPlanets();
  }, []);

  return { data, isLoading };
}

export default useFetchData;

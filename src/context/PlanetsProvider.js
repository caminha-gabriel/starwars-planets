import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import useFetchData from '../hooks/useFetchData';

function PlanetsProvider({ children }) {
  const [isFiltered, setIsFiltered] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const { data, isLoading } = useFetchData();

  const nameFilter = (name) => {
    if (name) {
      setIsFiltered(true);
      const searchName = name.toLowerCase();

      const planetsFilteredByName = data.filter((planet) => {
        const planetName = planet.name.toLowerCase();
        return planetName.includes(searchName);
      });

      setFilteredData(planetsFilteredByName);
    } else {
      setIsFiltered(false);
    }
  };

  const contextValue = {
    data,
    isLoading,
    isFiltered,
    filteredData,
    nameFilter,
  };

  return (
    <PlanetsContext.Provider value={ contextValue }>
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;

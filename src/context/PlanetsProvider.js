import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import useFetchData from '../hooks/useFetchData';

function PlanetsProvider({ children }) {
  const [filterByName, setFilterByName] = useState('');
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);
  const { data, isLoading } = useFetchData();

  const handleDataFilters = (dataItem) => {
    const filterChecks = [];

    const nameCheck = dataItem.name.toLowerCase().includes(filterByName.toLowerCase());
    if (filterByName && !nameCheck) return false;

    filterByNumericValues.forEach((filter) => {
      switch (filter.comparison) {
      case 'maior que':
        filterChecks.push(Number(dataItem[filter.column]) > Number(filter.value));
        break;
      case 'menor que':
        filterChecks.push(Number(dataItem[filter.column]) < Number(filter.value));
        break;
      case 'igual a':
        filterChecks.push(Number(dataItem[filter.column]) === Number(filter.value));
        break;
      default:
        return true;
      }
    });
    return filterChecks.every((el) => el);
  };

  const contextValue = {
    data,
    handleDataFilters,
    isLoading,
    setFilterByName,
    filterByName,
    setFilterByNumericValues,
    filterByNumericValues,
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

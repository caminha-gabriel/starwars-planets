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
      case 'Greater than':
        filterChecks.push(Number(dataItem[filter.column]) > Number(filter.value));
        break;
      case 'Lower than':
        filterChecks.push(Number(dataItem[filter.column]) < Number(filter.value));
        break;
      case 'Equal to':
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

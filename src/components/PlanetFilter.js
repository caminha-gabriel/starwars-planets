import React from 'react';
import FilterByName from './FilterByName';
import FilterByNumericValue from './FilterByNumericValue';
import '../styles/PlanetFilter.css';

function PlanetFilter() {
  return (
    <div className="planet-filter-div header-info">
      <FilterByName />
      <FilterByNumericValue />
    </div>
  );
}

export default PlanetFilter;

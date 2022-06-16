import React from 'react';
import FilterByName from './FilterByName';
import FilterByNumericValue from './FilterByNumericValue';

function PlanetFilter() {
  return (
    <div>
      <FilterByName />
      <FilterByNumericValue />
    </div>
  );
}

export default PlanetFilter;

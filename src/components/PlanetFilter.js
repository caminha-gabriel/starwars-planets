import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function PlanetFilter() {
  const { nameFilter } = useContext(PlanetsContext);
  return (
    <div>
      <label htmlFor="filterPlanets">
        <input
          onChange={ ({ target }) => nameFilter(target.value) }
          id="filterPlanets"
          data-testid="name-filter"
        />
      </label>
    </div>
  );
}

export default PlanetFilter;

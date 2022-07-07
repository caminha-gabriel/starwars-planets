import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function FilterByName() {
  const { filterByName, setFilterByName } = useContext(PlanetsContext);
  return (
    <div>
      <label htmlFor="filterPlanetsByName">
        <input
          placeholder="Planet Name"
          data-testid="name-filter"
          value={ filterByName }
          onChange={ ({ target }) => setFilterByName(target.value) }
          id="filterPlanetsByName"
        />
      </label>
    </div>
  );
}

export default FilterByName;

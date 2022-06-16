import React, { useState, useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function FilterByNumericValue() {
  const [selected, setSelected] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });

  const { filterByNumericValues, setFilterByNumericValues } = useContext(PlanetsContext);

  const numericFilterSubmit = (e) => {
    e.preventDefault();

    setFilterByNumericValues([...filterByNumericValues, selected]);
    setSelected({
      column: 'population',
      comparison: 'maior que',
      value: 0,
    });
  };

  return (
    <form onSubmit={ numericFilterSubmit }>
      <select
        data-testid="column-filter"
        value={ selected.column }
        onChange={ ({ target }) => setSelected({
          ...selected, column: target.value,
        }) }
      >
        <option>population</option>
        <option>orbital_period</option>
        <option>diameter</option>
        <option>rotation_period</option>
        <option>surface_water</option>
      </select>

      <select
        data-testid="comparison-filter"
        value={ selected.comparison }
        onChange={ ({ target }) => setSelected({
          ...selected, comparison: target.value,
        }) }
      >
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>

      <input
        data-testid="value-filter"
        type="number"
        value={ selected.value }
        onChange={ ({ target }) => setSelected({
          ...selected,
          value: Number(target.value),
        }) }
      />

      <button data-testid="button-filter" type="submit">
        Filtrar
      </button>
    </form>
  );
}

export default FilterByNumericValue;

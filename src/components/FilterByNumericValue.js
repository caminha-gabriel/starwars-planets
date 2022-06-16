import React, { useState, useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function FilterByNumericValue() {
  const [filterOptions, setFilterOptions] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);
  const [filtersSelected, setFiltersSelected] = useState([]);
  const [selected, setSelected] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });

  const { filterByNumericValues, setFilterByNumericValues } = useContext(PlanetsContext);

  const removeFilterSelection = (filter) => {
    const newArray = filtersSelected.filter(
      (selectedFilter) => selectedFilter !== filter,
    );
    setFiltersSelected(newArray);
    setFilterOptions([...filterOptions, filter]);
  };

  const removeFilters = () => {
    setFilterOptions([
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ]);
    setFiltersSelected([]);
  };

  const numericFilterSubmit = (e) => {
    e.preventDefault();

    const newFilterOptions = filterOptions.filter((option) => option !== selected.column);
    setFilterOptions(newFilterOptions);
    setFiltersSelected([...filtersSelected, selected.column]);

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
          ...selected,
          column: target.value,
        }) }
      >
        {filterOptions.map((column) => (
          <option key={ column }>{column}</option>
        ))}
      </select>
      <select
        data-testid="comparison-filter"
        value={ selected.comparison }
        onChange={ ({ target }) => setSelected({
          ...selected,
          comparison: target.value,
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
      <div>
        {filtersSelected.map((filter) => (
          <div key={ filter }>
            <span>{`The ${filter} filter is selected`}</span>
            <button
              type="button"
              onClick={ () => removeFilterSelection(filter) }
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <button data-testid="button-filter" type="submit">
        Filtrar
      </button>
      <button
        data-testid="button-remove-filters"
        type="button"
        onClick={ removeFilters }
      >
        Remover Filtros
      </button>
    </form>
  );
}

export default FilterByNumericValue;

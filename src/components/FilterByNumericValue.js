import React, { useState, useContext, useEffect } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function FilterByNumericValue() {
  const GREATER_THAN = 'Greater than';
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
    comparison: GREATER_THAN,
    value: 0,
  });

  const { filterByNumericValues, setFilterByNumericValues } = useContext(PlanetsContext);

  const removeFilterSelection = (filter) => {
    const newArray = filtersSelected.filter(
      (selectedFilter) => selectedFilter !== filter,
    );
    setFiltersSelected(newArray);
    setFilterOptions([...filterOptions, filter]);

    const filterToBeRemoved = filterByNumericValues.find(
      (filterObj) => filterObj.column === filter,
    );
    setFilterByNumericValues(filterByNumericValues.filter(
      (alreadyDefinedFilter) => alreadyDefinedFilter !== filterToBeRemoved,
    ));
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
    setFilterByNumericValues([]);
  };

  useEffect(() => {
    const resetSelectedOptions = () => {
      setSelected({
        column: filterOptions[0],
        comparison: GREATER_THAN,
        value: 0,
      });
    };
    resetSelectedOptions();
  }, [filterOptions]);
  const numericFilterSubmit = (e) => {
    e.preventDefault();
    if (filterOptions.length > 0) {
      const newFilterOptions = filterOptions
        .filter((option) => option !== selected.column);
      setFilterOptions(newFilterOptions);
      setFiltersSelected([...filtersSelected, selected.column]);

      setFilterByNumericValues([...filterByNumericValues, selected]);
    }
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
        <option>Greater than</option>
        <option>Lower than</option>
        <option>Equal to</option>
      </select>

      <input
        data-testid="value-filter"
        type="number"
        value={ selected.value }
        onChange={ ({ target }) => setSelected({
          ...selected,
          value: Number(target.value).toString(),
        }) }
      />
      <div>
        {filtersSelected.map((filter) => (
          <div key={ filter } data-testid="filter">
            <span>{`The ${filter} filter is selected`}</span>
            <button
              type="button"
              className="remove-btn"
              onClick={ () => removeFilterSelection(filter) }
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <button
        type="submit"
        className="filter-btn"
        data-testid="button-filter"
      >
        Filter
      </button>
      <button
        data-testid="button-remove-filters"
        type="button"
        className="remove-all-btn"
        onClick={ removeFilters }
      >
        Remove Filters
      </button>
    </form>
  );
}

export default FilterByNumericValue;

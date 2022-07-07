import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import '../styles/Table.css';

function Table() {
  const { data, handleDataFilters, isLoading } = useContext(PlanetsContext);
  if (isLoading) return <h2 className="loading">Loading...</h2>;

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Climate</th>
          <th>Population</th>
          <th>Gravity</th>
          <th>Diameter</th>
          <th>Terrain</th>
          <th>Surface Water</th>
          <th>Rotation Period</th>
          <th>Orbital Period</th>
        </tr>
      </thead>
      <tbody>
        {data.filter(handleDataFilters).map((planet) => (
          <tr className="planet-row" key={ planet.name }>
            <td className="planet-name">{planet.name}</td>
            <td>{planet.climate}</td>
            <td>{planet.population}</td>
            <td>{planet.gravity}</td>
            <td>{planet.diameter}</td>
            <td>{planet.terrain}</td>
            <td>{planet.surface_water}</td>
            <td>{planet.rotation_period}</td>
            <td>{planet.orbital_period}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;

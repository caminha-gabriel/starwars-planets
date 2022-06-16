import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Table() {
  const { data, handleDataFilters, isLoading } = useContext(PlanetsContext);
  if (isLoading) return <p>Loading...</p>;

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
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
          <th>Url</th>
        </tr>
      </thead>
      <tbody>
        {data.filter(handleDataFilters).map((planet) => (
          <tr key={ planet.name }>
            <td>{planet.name}</td>
            <td>{planet.climate}</td>
            <td>{planet.population}</td>
            <td>{planet.gravity}</td>
            <td>{planet.diameter}</td>
            <td>{planet.terrain}</td>
            <td>{planet.surface_water}</td>
            <td>{planet.rotation_period}</td>
            <td>{planet.orbital_period}</td>
            <td>{planet.films}</td>
            <td>{planet.created}</td>
            <td>{planet.edited}</td>
            <td>{planet.url}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;

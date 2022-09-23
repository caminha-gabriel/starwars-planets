import React from 'react';
import Table from './components/Table';
import PlanetsProvider from './context/PlanetsProvider';
import PlanetFilter from './components/PlanetFilter';
import './styles/App.css';

function App() {
  return (
    <PlanetsProvider>
      <div className="app-div">
        <div className="header-div">
          <h1 className="header-info">StarWars Planets</h1>
          <PlanetFilter />
        </div>
        <Table />
      </div>
    </PlanetsProvider>
  );
}

export default App;

import React from 'react';
import './App.css';
import Table from './components/Table';
import PlanetsProvider from './context/PlanetsProvider';
import PlanetFilter from './components/PlanetFilter';

function App() {
  return (
    <PlanetsProvider>
      <div>
        <PlanetFilter />
        <Table />
      </div>
    </PlanetsProvider>
  );
}

export default App;

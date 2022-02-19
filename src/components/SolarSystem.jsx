import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system" className="title-container">
        <Title headline="Planetas" />

        <section className="container-card">
          {planets.map((planet, index) => (
            <PlanetCard
              planetName={ planet.name }
              planetImage={ planet.image }
              key={ index }
            />
          ))}
        </section>
      </div>
    );
  }
}

export default SolarSystem;

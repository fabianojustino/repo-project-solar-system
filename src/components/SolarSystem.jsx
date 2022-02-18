import React from 'react';
import Title from './Title';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system" className="solarSystem">
        <Title headline="Planetas" />
      </div>
    );
  }
}

export default SolarSystem;

import React from 'react';
import PropType from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div data-testid="planet-card" className="planet-card">
        <img src={ planetImage } alt={ `Planeta ${planetName}` } className="planet" />
        <p data-testid="planet-name" className="planet-name">
          { planetName }
        </p>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropType.string.isRequired,
  planetImage: PropType.string.isRequired,
};

export default PlanetCard;

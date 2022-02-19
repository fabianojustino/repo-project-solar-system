import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions" className="title-container">
        <Title headline="Missões" />
        <section className="container-mission-card">
          {missions.map((mission, index) => (
            <MissionCard
              name={ mission.name }
              year={ mission.year }
              country={ mission.country }
              destination={ mission.destination }
              key={ index }
            />
          ))}
        </section>
      </div>
    );
  }
}

export default Missions;

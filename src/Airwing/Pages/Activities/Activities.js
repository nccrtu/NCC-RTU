import React from 'react';
import "../Activities/Activities.css";
import NavBar from '../../Components/Navbar/Nav';

const Activities = () => {
  const activities = [
    {
      name: 'YOUTH EXCHANGE PROGRAM',
      act1: require('../../Assests/Picture2.jpg'),
      act2: require('../../Assests/Picture3.jpg'),
    },
    {
      name: 'REPUBLIC DAY CAMP',
      act3: require('../../Assests/Picture4.png'),
    },
    {
      name: 'FLYING IN MICROLIGHT AIRCRAFT',
      act4: require('../../Assests/Picture5.jpg'),
      act5: require('../../Assests/Picture6.png'),
    },
    {
      name: 'AEROMODELLING',
      act6: require('../../Assests/Picture7.jpg'),
      act7: require('../../Assests/Picture8.png'),
    },
    {
      name: 'FIRING',
      act8: require('../../Assests/Picture9.jpg'),
      act9: require('../../Assests/Picture10.jpg'),
    },
    {
      name: 'TENT PITCHING & COMBAT',
      act10: require('../../Assests/Picture11.jpg'),
      act11: require('../../Assests/Picture12.jpg'),
    },
    {
      name: 'PARA JUMP TRAINING',
      act12: require('../../Assests/Picture13.jpg'),
    },
    {
      name: 'REGULAR PARADE TRAINING',
      act14: require('../../Assests/Picture15.jpg'),
      act15: require('../../Assests/Picture16.jpg'),
    },
    {
      name: 'COMMUNITY SERVICE',
      act16: require('../../Assests/Picture17.jpg'),
      act13: require('../../Assests/Picture19.jpg')
    },
  ];

  return (
    <div>
      <NavBar/>
      <p className='heading-title'>ACTIVITES</p>
    <div className="activities-container">
      {activities.map((activity, index) => (
        <div className="activity" key={index}>
          <h3>{activity.name}</h3>
          <div className="photos">
          {activity.act1 && <img src={activity.act1} alt={`${activity.name} act 1`} />}
            {activity.act2 && <img src={activity.act2} alt={`${activity.name} act 2`} />}
            {activity.act3 && <img src={activity.act3} alt={`${activity.name} act 3`} />}
            {activity.act4 && <img src={activity.act4} alt={`${activity.name} act 4`} />}
            {activity.act5 && <img src={activity.act5} alt={`${activity.name} act 5`} />}
            {activity.act6 && <img src={activity.act6} alt={`${activity.name} act 6`} />}
            {activity.act7 && <img src={activity.act7} alt={`${activity.name} act 7`} />}
            {activity.act8 && <img src={activity.act8} alt={`${activity.name} act 8`} />}
            {activity.act9 && <img src={activity.act9} alt={`${activity.name} act 9`} />}
            {activity.act10 && <img src={activity.act10} alt={`${activity.name} act 10`} />}
            {activity.act11 && <img src={activity.act11} alt={`${activity.name} act 11`} />}
            {activity.act12 && <img src={activity.act12} alt={`${activity.name} act 12`} />}
            {activity.act13 && <img src={activity.act13} alt={`${activity.name} act 13`} />}
            {activity.act14 && <img src={activity.act14} alt={`${activity.name} act 14`} />}
            {activity.act15 && <img src={activity.act15} alt={`${activity.name} act 15`} />}
            {activity.act16 && <img src={activity.act16} alt={`${activity.name} act 16`} />}
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Activities;
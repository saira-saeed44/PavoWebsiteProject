import React from 'react';
import Card from './Card'; 
import { faCheckCircle, faCode, faLightbulb } from '@fortawesome/free-solid-svg-icons';
const CardList = () => {
  const cardsData = [
    { 
      icon: faCheckCircle,
      title: 'High experience',
        description: 'lorem   Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur',
    },
    {
      icon: faCode,
      title: 'Useful sandboxes',
      description: 'lorem   Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur',
    },
    {
      icon: faLightbulb,

      title: 'Success side projects',
      description: 'lorem   Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur',
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-4 px-5">
      {cardsData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          description={card.description}
          icon={card.icon}
        />
      ))}
    </div>
  );
};

export default CardList;
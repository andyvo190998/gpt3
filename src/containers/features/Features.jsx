import React from 'react';
import './features.css';
import Feature from '../../components/feature/Feature';

const Features = () => {
  const featuresData = [
    {
      title: 'Improving end distrusts instantly',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora nam placeat laudantium, sapiente consectetur error incidunt cumque debitis temporibus tenetur.',
    },
    {
      title: 'Improving end distrusts instantly',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora nam placeat laudantium, sapiente consectetur error incidunt cumque debitis temporibus tenetur.',
    },
    {
      title: 'Improving end distrusts instantly',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora nam placeat laudantium, sapiente consectetur error incidunt cumque debitis temporibus tenetur.',
    },
    {
      title: 'Improving end distrusts instantly',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora nam placeat laudantium, sapiente consectetur error incidunt cumque debitis temporibus tenetur.',
    },
  ];
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
          The Future is Now and You Just Need To Realize It. Step Into Future
          Today & Make it Happen
        </h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map((item, index) => (
          <Feature key={index} title={item.title} text={item.text} />
        ))}
      </div>
    </div>
  );
};

export default Features;

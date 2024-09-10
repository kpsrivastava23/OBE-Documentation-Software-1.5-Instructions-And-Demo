import React from 'react';
import '../styles/Instructions.css'; // Proper relative path

const Instructions = () => {
  const data = [
    {
      text: 'Step 1: Open the OBE Documentation Software from the link above.',
      image: 'https://res.cloudinary.com/dt781mebk/image/upload/v1725979674/eduqqz74amqocabnrcnb.png'
    },
    {
      text: 'Step 2: Register admin, coordinators and teachers',
      image: 'https://res.cloudinary.com/dt781mebk/image/upload/v1725979980/obe%20documentation/ivg45a62geyinkr37wrf.png'
    },
    {
      text: 'Step 3: Login as Admin',
      image: 'https://res.cloudinary.com/dt781mebk/image/upload/v1725985570/obe%20documentation/mm76tfs75tpyqv2lazxu.png'
    },
    {
      text: 'Step 4: Select Course Mapping and enter details of courses using excel sheet',
      image: 'https://res.cloudinary.com/dt781mebk/image/upload/v1725985582/obe%20documentation/ueuwb8zcbvx6xfnjog0b.png'
    },
    {
      text: 'Download sample excel',
      image: 'https://res.cloudinary.com/dt781mebk/image/upload/v1725985600/obe%20documentation/twu3eu9x3ltipjlr5nbm.png'
    },
    {
      text: 'Upload the excel',
      image: 'https://res.cloudinary.com/dt781mebk/image/upload/v1725985617/obe%20documentation/px31zctftcsw7ioiywdw.png'
    },
    {
      text: 'View data as per your choice',
      image: 'https://res.cloudinary.com/dt781mebk/image/upload/v1725985631/obe%20documentation/dzgttpav75wqwe4cyizr.png'
    }

  ];

  return (
    <div className="outer-container">
      <div className="box">
        <h2>Introduction</h2>
        <p className="description">
          Welcome to the OBE Documentation Software. This guide will walk you through the steps of using the software effectively. Follow the instructions below to get started with the various features and functionalities of the application.
        </p>
        <div className="link-container">
          
          <a
            className="software-link"
            href="https://obedovumentation.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Go to OBE Documentation Software (might take 2-3 minutes to load as we are currently using a free version of Render)
          </a>
        </div>
        <h2>Instructions and Working Demo</h2>
        <div className="instruction-list">
          {data.map((item, index) => (
            <div key={index} className="instruction-item">
              <p>{item.text}</p>
              <img src={item.image} alt={`Step ${index + 1}`} className="instruction-image" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Instructions;

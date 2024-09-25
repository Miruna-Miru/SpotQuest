import React from 'react';
import ComponentDetail from './ComponentDetail'; // Adjust the path as needed

const P2Component = () => {
  const imageSources = [
    'path/to/MeenakshiAmmanTemple.jpg',
    'path/to/AnotherTemple.jpg',
    // Add more image paths as needed
  ];

  const descriptions = [
    { title: 'Meenakshi Amman Temple', content: 'The Meenakshi Amman Temple is a historic Hindu temple located in the city of Madurai, Tamil Nadu, India. It is dedicated to Meenakshi, a form of Parvati, and her consort, Sundareshwar, a form of Shiva.' },
    { title: 'Another Temple', content: 'Description of another temple or location here.' },
    // Add more descriptions as needed
  ];

  return (
    <ComponentDetail imageSources={imageSources} descriptions={descriptions} />
  );
};

export default P2Component;

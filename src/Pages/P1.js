import React from 'react';
import ComponentDetail from './ComponentDetail'; 
import Meenaksi from '../assets/Meenakshi.jpg';
import GM from '../assets/GM.jpg';
import TPK from '../assets/TPK.jpeg';
import TM from '../assets/TM.jpg';

const P1Component = () => {
  const imageSources = [
    Meenaksi,
    GM,
    TPK,
    TM
  ];

  const descriptions = [
    { 
      title: 'Meenakshi Amman Temple', 
      content: 'The Meenakshi Amman Temple is a historic Hindu temple located in Madurai, Tamil Nadu, India. It is dedicated to Meenakshi, a form of Parvati, and her consort, Sundareshwar, a form of Shiva.',
      details: 'Peak Hours: 10 AM - 12 PM and 5 PM - 7 PM. Special Occasions: Meenakshi Thirukalyanam (Marriage Festival) in April-May.' 
    },
    { 
      title: 'Gandhi Museum', 
      content: 'The Gandhi Museum in Madurai is dedicated to Mahatma Gandhi and his role in the Indian freedom struggle. It is housed in the former residence of the Maharaja of Pudukottai and features a collection of photographs, manuscripts, and artifacts related to Gandhi’s life and work.',
      details: 'Peak Hours: 10 AM - 12 PM and 3 PM - 5 PM. Special Occasions: Annual Gandhi Jayanti Exhibition in October.' 
    },
    { 
      title: 'Tirupparankundram Temple', 
      content: 'The Tirupparankundram Temple is one of the six abodes of Lord Murugan, located on a hill in Tirupparankundram, Madurai. It is an ancient rock-cut temple known for its unique architecture and religious significance, attracting devotees and tourists alike.',
      details: 'Peak Hours: Early morning and evening. Special Occasions: Thai Poosam Festival in January-February.' 
    },
    { 
      title: 'Nayakkar Mahal', 
      content: 'Nayakkar Mahal, also known as the Nayak Palace, is a grand historical palace located in Madurai. Built during the Nayak dynasty, it is renowned for its impressive architecture, intricate carvings, and large courtyards, reflecting the grandeur of the Nayak rulers.',
      details: 'Peak Hours: 9 AM - 12 PM and 3 PM - 6 PM. Special Occasions: Annual Nayak Festival in December.' 
    },
  ];

  return (
    <ComponentDetail imageSources={imageSources} descriptions={descriptions} />
  );
};

export default P1Component;

import ReactDOM from 'react-dom/client';
import React from 'react';

import './index.css';
import Images from './assets/images.js';

import CardComponent from './component/CardComponent';
import NavbarComponent from './component/NavbarComponent';

let data = [
  {
    id: 101,
    img: Images.UPAHAIKA,
    name: 'Upaharika Gawali',
    address: 'Bhilai, Chhattisgarh',
    organization: 'Zinier',
    designation: 'Senior Software Developer',
    linkedin: 'https://www.linkedin.com/in/upaharika-gawali-578b73125',
    github: 'https://github.com/upaharika',
  },
  {
    id: 102,
    img: Images.RUCHA,
    name: 'Rucha Mahabal',
    address: 'Mumbai',
    organization: 'Frappe Tech',
    designation: 'Engineering Lead',
    linkedin: 'https://www.linkedin.com/in/rucha-mahabal-4b0102187',
    github: 'https://github.com/ruchamahabal',
  },
  {
    id: 103,
    img: Images.RISHAV,
    name: 'Rishav Sah',
    address: 'Gachibowli, Hyderabad',
    organization: 'myPaisaa',
    designation: 'Software Engineer',
    linkedin: 'https://www.linkedin.com/in/rishav-sah-b1966b190/',
    github: 'https://github.com/rishav-sah',
  },
  {
    id: 104,
    img: Images.VINAY,
    name: 'Vinay Puvvadi',
    address: 'Hyderabad',
    organization: 'Deloitte USI',
    designation: 'Software Engineer',
    linkedin: 'https://www.linkedin.com/in/vinay-sai-211452212/',
    github: 'https://github.com/vinaysaip',
  },
  {
    id: 105,
    name: 'Pratik Mothe',
    img: Images.PRATIK,
    address: 'Kolhapur',
    organization: 'Deloitte USI',
    designation: 'Software Engineer',
    linkedin: 'https://www.linkedin.com/in/pratik-mothe-40a418106/',
    github: 'https://github.com/Pratik33',
  },
  {
    id: 106,
    name: 'Shubham Yadav',
    img: Images.SHUBHAM,
    address: 'Mohali',
    organization: 'Growth Natives',
    designation: 'Software Engineer',
    linkedin: 'https://www.linkedin.com/in/shubhamdsm',
    github: 'https://github.com/shubhamyadav30',
  },
  {
    id: 107,
    name: 'Shailendra Raikwar',
    img: Images.SHAILENDRA,
    address: 'Bhopal',
    organization: 'Anika Media Pvt Ltd',
    designation: 'Software Engineer',
    linkedin: 'https://www.linkedin.com/in/shailendrasinghraikwar',
    github: 'https://github.com/ShailendraSinghRaikwar',
  },
  {
    id: 108,
    img: Images.ABHISHEK,
    name: 'Abhishek Anand',
    address: 'Bangalore',
    organization: 'SAPLabs',
    designation: 'Senior Developer',
    linkedin: 'https://www.linkedin.com/in/abhishekanand001',
    github: 'https://github.com/abhishekps782',
  },
];

const CardHolder = () => {
  return data.map((user) => {
    return (
      <CardComponent
        user={user}
        key={user.id}
      />
    );
  });
};

const AppLayoutComponent = () => {
  return (
    <>
      <NavbarComponent />
      <div className='container'>
        <div className='row'>
          <CardHolder />
        </div>
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayoutComponent />);

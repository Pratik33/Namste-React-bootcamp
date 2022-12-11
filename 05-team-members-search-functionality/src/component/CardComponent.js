import React from 'react';

const CardComponent = ({ user }) => {
  const { id, img, name, organization, designation, github, linkedin } = user;
  return (
    <div className='col-md-4 mt-2'>
      <div
        className='card'
        style={{ width: '16rem' }}>
        <img
          className='card-img-top img-fluid rounded-circle p-2'
          src={img}
          alt='Card image cap'
          style={{ height: '18rem' }}
        />
        <div className='card-body text-center'>
          <h4 className='card-text'>{name}</h4>
          <h6>{organization}</h6>
          <p>
            <small>{designation}</small>
          </p>
        </div>
        <div className='cardFooter text-center row m-0 p-0'>
          <div className='col-4 m-auto'>
            <a
              target='blank'
              href={github}>
              <i className='fa-brands fa-github'></i>
            </a>
          </div>
          <div className='col-4 m-auto'>
            <a
              target='blank'
              href={linkedin}>
              <i className='fa-brands fa-twitter'></i>
            </a>
          </div>
          <div className='col-4 m-auto'>
            <a
              target='blank'
              href={linkedin}>
              <i className='fa-brands fa-linkedin '></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;

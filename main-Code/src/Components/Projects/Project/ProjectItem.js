import React from 'react';

function ProjectItem({ assignment }) {
  return (
    <div className='col-md-12 mx-auto my-3'>
      <h5 className='card-title'>{assignment.title}</h5>
      <p className='card-text'>
        With supporting text below as a natural lead-in to additional content.
      </p>
      <a
        href={assignment.gitHubLink}
        target='_blank'
        className='btn btn-primary'>
        Git-Hub Link
      </a>
      <a
        href='#'
        className='btn btn-secondary ml-2'>
        Live Demo
      </a>
    </div>
  );
}

export default ProjectItem;

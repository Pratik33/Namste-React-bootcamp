import React from 'react';
import './ProjectItem.css';

function ProjectItem({ assignment }) {
  return (
    <div className='col-md-12 mx-5 my-3 projectItem justify-content-center'>
      <h5>{assignment.title}</h5>
      <p>
        With supporting text below as a natural lead-in to additional content.
      </p>
      <a
        href={assignment.gitHubLink}
        target='_blank'
        className='btn btn-primary text-color'>
        Git-Hub Link
      </a>
      <a
        href='#'
        className='btn btn-secondary ml-2'>
        Live Demo
      </a>
      <a
        href={assignment.gitHubLink}
        target='_blank'
        className='btn btn-primary ml-2 text-color'>
        Theroy Lecture
      </a>
    </div>
  );
}

export default ProjectItem;

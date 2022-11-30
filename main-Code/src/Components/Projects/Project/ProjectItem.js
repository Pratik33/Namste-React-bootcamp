import React from 'react';
import './ProjectItem.css';

function ProjectItem({ assignment, cssClass }) {
  return (
    <div className={`'row ${cssClass} justify-content-center`}>
      <div className={`col-md-12 p-4 projectItem justify-content-center `}>
        <div className='row m-0 p-0'>
          <div class='col m-0 p-0'>
            <h5>{assignment.title}</h5>
          </div>
        </div>
        <div className='row m-0 p-0'>
          <div class='col m-0 p-0'>
            <p>
              With supporting text below as a natural lead-in to additional
              content.
            </p>
          </div>
        </div>

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
    </div>
  );
}

export default ProjectItem;

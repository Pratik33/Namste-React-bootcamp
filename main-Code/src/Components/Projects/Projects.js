import React from 'react';
import ProjectItem from './Project/ProjectItem';

function Projects({ assignments }) {
  let projects = assignments.map((assignment) => {
    return (
      <ProjectItem
        className='col-lg-4'
        assignment={assignment}
      />
    );
  });
  //console.log(projects);
  return <>{projects}</>;
}

export default Projects;
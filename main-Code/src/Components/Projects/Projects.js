import React from 'react';
import ProjectItem from './Project/ProjectItem';

function Projects({ assignments }) {
  let projects = assignments.map((assignment) => {
    return <ProjectItem assignment={assignment} />;
  });
  return <>{projects}</>;
}

export default Projects;

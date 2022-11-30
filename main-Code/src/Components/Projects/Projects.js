import React from 'react';
import ProjectItem from './Project/ProjectItem';

function Projects({ assignments }) {
  let projects = assignments.map((assignment, index) => {
    let cssClass = index % 2 == 0 ? 'offset-background' : 'plain-background:';
    return (
      <ProjectItem
        assignment={assignment}
        cssClass={cssClass}
      />
    );
  });
  return <>{projects}</>;
}

export default Projects;

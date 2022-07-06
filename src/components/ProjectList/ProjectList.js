import propTypes from 'prop-types'

function ProjectList(props) {
  return (
    <div className="project-list">
      {props.projects.map((p, idx) => (
        <img src={p.img} alt='#' key={'projectList' + idx}></img>
      ))}
    </div>
  );
}

ProjectList.propTypes = {
  projects: propTypes.array
}
  
export default ProjectList;
  
import propTypes from 'prop-types'

function Toolbar(props) {
  return (
    <div className="toolbar">
      {props.filters.map((f, idx) => (
          <button className="btn btn-outline-dark" onClick={() => {props.onSelectFilter(f)}} key={'projectList' + idx}>{f}</button>
      ))}
    </div>
  );
}

Toolbar.propTypes = {
  filters: propTypes.array
}
  
export default Toolbar;
  
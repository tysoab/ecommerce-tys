import classes from './ToggleBtn.module.css';

const ToggleBtn = function(props){

  return <div className={`${classes.toggleBtn}`}>
    <p onClick={props.onToggle}>&times;</p>
  </div>
};

export default ToggleBtn;
import icon from '../../assets/toggle.png';
import classes from './Menu.module.css';

const Menu = function(props){

  return <div className={classes.menu}>
    <img src={icon} alt="menu" onClick={props.onToggle}/>
  </div>
};

export default Menu;
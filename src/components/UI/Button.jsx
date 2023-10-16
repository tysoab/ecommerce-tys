import classes from './Button.module.css';

const Button = function(props){

  return <button {...props} className={`${classes.button} ${props.className}`}>{props.title}</button>
};

export default Button;
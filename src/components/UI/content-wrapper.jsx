import classes from './content-wrapper.module.css';

const ContentWrapper = function(props){

  return <div className={`${classes.wrapper} ${props.className}`}>
    {props.children}
  </div>
};

export default ContentWrapper;
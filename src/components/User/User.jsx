import { Link, useNavigate, useSearchParams } from "react-router-dom";
import ContentWrapper from "../UI/content-wrapper";

import classes from './User.module.css';
import Button from "../UI/Button";
import { useState } from "react";

const User = function(){

  const [searchParam, setSearchParam] = useSearchParams();
  const userAction = searchParam.get('account');
  const navigate = useNavigate();

  const [inputState, setInputState] = useState({
    email: '',
    password: '',
    username: ''
  });

  const emailIsValid = inputState.email.trim().includes('@');
  const passwordIsValid = inputState.password.trim().length > 6;
  const usernameIsValid = inputState.username.trim() !== '';
  const formIsValid = userAction === 'login' ? (usernameIsValid && passwordIsValid) :
    (emailIsValid && passwordIsValid && usernameIsValid);


  const inputChangeHandler = (value, identifier)=>{
    if(identifier === 'email'){
      setInputState(preState => preState = {
        ...preState,
        email: value
      });
    }

    if(identifier === 'password'){
      setInputState(preState => preState = {
        ...preState,
        password: value
      });
    }

    if(identifier === 'username'){
      setInputState(preState => preState = {
        ...preState,
        username: value
      });
    }

  };


  const submitHandler = (event)=>{
    event.preventDefault();
    let userData;

    if(!formIsValid){
      return
    }

    const id = (Date.now() + '').slice(-8);
  
    if(userAction === 'login'){
      userData = {
        username: inputState.username,
        password: inputState.password,
        id
      };
    }
    else{
      userData ={
      email: inputState.email,
      username: inputState.username,
      password: inputState.password,
      id
    };
    }

    const proceed = window.confirm('Thank You for your time');
    if(proceed){
      navigate('/');
    }

    setInputState({
      email: '',
      username: '',
      password: ''
    });
  };



  return <ContentWrapper>
    <h2>{userAction === 'login' ? 'Login:' : 'Register:'}</h2>

    <form className={classes['form-group']} onSubmit={submitHandler}>
    {userAction !== 'login' &&
      <div className={classes['form-controls']}>
        <label htmlFor="email">Email: <span>*</span></label>
        <input type="email" 
          value={inputState.email}
          onChange={(event)=> inputChangeHandler(event.target.value, 'email')}
        />
        
      </div>
      
      }
      
      <div className={classes['form-controls']}>
        <label htmlFor="username">Username: <span>*</span></label>
        <input type="text"
        value={inputState.username}
        onChange={(event)=> inputChangeHandler(event.target.value, 'username')} 
         />
      </div>
      

      <div className={classes['form-controls']}>
        <label htmlFor="password">Password: <span>*</span></label>
        <input type="text"
        value={inputState.password}
        onChange={(event)=> inputChangeHandler(event.target.value, 'password')}
         />
      </div>

      <div>
        <Button title={userAction === 'login' ? 'Login' : 'Register'}
        className={`${!formIsValid ? classes.disabledBtn : ''}`}
        disabled ={!formIsValid}
        />
      </div>
    </form>

    <div className={classes['button-container']}>
      <p>{userAction === 'login' ? `Don't have an account:` : `Already Register: `}</p>
      <Link to={`/user?account=${userAction === 'login' ? 'signup' : 'login'}`}>
        {userAction === 'login' ? 'Create Account' : 'Login'}
      </Link>
    </div>
  </ContentWrapper>
}
export default User;
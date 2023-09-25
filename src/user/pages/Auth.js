import React,{useState,useContext} from "react";
import Card from "../../shared/UI elements/Card";
import Input from "../components/FormElements/Input";
import Button from "../components/FormElements/Button";
import { VALIDATOR_EMAIL,VALIDATOR_MINLENGTH,VALIDATOR_REQUIRE } from "../../shared/util/Validator";
import { AuthContext } from "../../shared/context/auth-context";
import { useForm } from "../../shared/hooks/Form-hook";
import './Auth.css';


const Auth =()=>{
 const auth = useContext(AuthContext);
 const [isLoginMode,setisLoginMode]=useState(true);
 const [formState,inputChangeHandler,setFormData]=useForm({
    email:{
        value:'',
        isValid:false,
    },
    password:{
        value:'',
        isValid:false,
    },
  },false);
  const switchModeHandler =()=>{
    if (!isLoginMode) {
        setFormData(
            {
                ...formState.inputs,
                name: undefined
              },
              formState.inputs.email.isValid && formState.inputs.password.isValid
        );
    } else {
        setFormData(
          {
            ...formState.inputs,
            name: {
              value: '',
              isValid: false
            }
          },
          false
        );
      }

     setisLoginMode(prevMode =>!prevMode);
  };
  const authSubmitHandler=(event)=>{
       event.preventDefault();
       console.log(formState.inputs);
       auth.login();
  };
    return(
        <Card className="authentication" > 
        <h2> Login Required</h2>
        <hr/>
            <form onSubmit={authSubmitHandler}>
            {!isLoginMode && (
          <Input
            element="input"
            id="name"
            type="text"
            label="Your Name"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a name."
            onInput={inputChangeHandler}
          />
        )}
            <Input
          element="input"
          id="email"
          type="email"
          label="E-Mail"
          validators={[VALIDATOR_EMAIL()]}
          errorText="Please enter a valid email address."
          onInput={inputChangeHandler}
        />
        <Input
          element="input"
          id="password"
          type="password"
          label="Password"
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText="Please enter a valid password, at least 5 characters."
          onInput={inputChangeHandler}
        />
        <Button type="submit" disabled={!formState.isValid}>
          {isLoginMode ? 'LOGIN':'SIGN UP'}
        </Button>
            </form>
            <Button inverse onClick={switchModeHandler}> Switch to {isLoginMode ? 'SIGN UP':'LOGIN'}</Button>
        </Card>
    );
};

export default Auth;
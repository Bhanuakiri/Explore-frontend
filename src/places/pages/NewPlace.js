import React,{useCallback,useReducer} from 'react';
import './PlaceForm.css';
import Input from '../../user/components/FormElements/Input';
import Button from '../../user/components/FormElements/Button';
import { VALIDATOR_REQUIRE,VALIDATOR_MINLENGTH} from '../../shared/util/Validator';
import { useForm } from '../../shared/hooks/Form-hook';




const NewPlace = () => {
   const [formState,inputChangeHandler] = useForm(
    {
      title: {
        value: '',
        isValid: false
      },
      description: {
        value: '',
        isValid: false
      },
      address: {
        value: '',
        isValid: false
      }
    },
    false
   );
  
  
  const placeSubmitHAndler = event =>{
    event.preventDefault();
    console.log(formState.inputs);
  };

  return (
    <form className="place-form" onSubmit={placeSubmitHAndler}>
         <Input
         id="title" 
         element="input" 
         type="text" 
         label="Title" 
         validators={[VALIDATOR_REQUIRE()]}
         errorText="please enter a valid title."
          onInput={inputChangeHandler}
         />
          <Input
         id="description" 
         element="textarea" 
         type="text" 
         label="Description" 
         validators={[VALIDATOR_MINLENGTH(5)]}
         errorText="please enter a valid description."
          onInput={inputChangeHandler}
         />

         <Input
         id="Address" 
         element="input" 
         type="Address" 
         label="Address" 
         validators={[VALIDATOR_REQUIRE()]}
         errorText="please enter a valid Address."
          onInput={inputChangeHandler}
         /> 
         <Button type="submit" disabled={!formState.isValid}>ADD PLACE</Button>
    </form>
  );

};

export default NewPlace;
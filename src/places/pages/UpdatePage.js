import React,{useEffect,useState}from "react";
import { useParams } from "react-router-dom";
import Input from "../../user/components/FormElements/Input";
import Button from "../../user/components/FormElements/Button";
import Card from "../../shared/UI elements/Card";
import { VALIDATOR_MINLENGTH,VALIDATOR_REQUIRE } from "../../shared/util/Validator";
import { useForm } from "../../shared/hooks/Form-hook";
import './PlaceForm.css';

const DUMMY_Places =[
    {
        id:'p1',
        title:'THE EMPIRE STATE BUILDING',
        description:'one of tallest building in world',
        address:'20 W 34th St., New York, NY 10001, United States',
        imageUrl:'https://lh3.googleusercontent.com/p/AF1QipNBqSLqpxqFLGZaH9Et28rgaHD1PDKuSepYIdaU=s1360-w1360-h1020',
        loaction:{
            lat:40.7484405,
            lng:-73.9856644,
        },
        creator:'u1'
    },
    {
        id:'p2',
        title:'EFFILE TOWER',
        description:'One of tallest Tower in world',
        address:' Champ de Mars, 5 Av. Anatole France, 75007 Paris',
        imageUrl:'https://lh3.googleusercontent.com/p/AF1QipNI1IoH-kxR2xK-VXG30gz6iSiyza2HKnFal-nH=s1360-w1360-h1020',
        location:{
            lat:48.8583701,
            lng:2.2944813,
        },
        creator:'u2',
    },
    {
        id:'p3',
        title:'TAJ MAHAL',
        description:'One of MAginificent marvel structure made of White Marble',
        address:' Dharmapuri, Forest Colony, Tajganj, Agra, Uttar Pradesh 282001',
        imageUrl:'https://lh3.googleusercontent.com/p/AF1QipO1JRmkzoLNOqay6x-CVjaR04C5NYsBuoVd4ox5=s1360-w1360-h1020',
        loaction:{
            lat:27.1751448,
            lng:78.0421422,
        },
        creator:'u3',
    },
    {
        id:'p4',
        title:'Colosseum',
        description:'The Colosseum is an elliptical amphitheatre in the centre of the city of Rome, Italy',
        address:'Piazza del Colosseo, 1, 00184 Roma RM, Italy',
        imageUrl:'https://lh3.googleusercontent.com/p/AF1QipNEFWjO8XLisIpYFuqgE38HFKBAr99MaDcxHUDY=s1360-w1360-h1020',
        loaction:{
            lat:41.8902102,
            lng:12.4922309,
        },
        creator:'u4',
    },
];

const UpdatePlace =()=>{
    const placeId = useParams().placeId;
    const [isLoading, setIsLoading] = useState(true);
    

    const [formState, inputchangeHandler,setFormData] = useForm(
        {
          title: {
            value:'',
            isValid: false
          },
          description: {
            value: '',
            isValid: false
          }
        },
        false
      );
      const identifiedPlace = DUMMY_Places.find(p =>p.id ===placeId);

      useEffect(() => {
        if(identifiedPlace){
        setFormData(
          {
            title: {
              value: identifiedPlace.title,
              isValid: true
            },
            description: {
              value: identifiedPlace.description,
              isValid: true
            }
          },
          true
        );
        }
        setIsLoading(false);
    }, [setFormData, identifiedPlace]);

      const placeUpdateSubmitHandler = event =>{
        event.preventDefault();
        console.log(formState.inputs);
      };
      
    if(!identifiedPlace)
    {
        return(
            <div className="center">
            <Card>
            <h2>could not find a place!</h2>
            </Card>    
            </div>
        );
    }

    if (isLoading) {
        return (
          <div className="center">
            <h2>Loading...</h2>
          </div>
        );
      }

    return(
        <form className="place-form" onSubmit={placeUpdateSubmitHandler}>
           <Input
         id="title" 
         element="input" 
         type="text" 
         label="Title" 
         validators={[VALIDATOR_REQUIRE()]}
         errorText="please enter a valid title."
           onInput={inputchangeHandler}
          value={formState.inputs.title.value}
          valid={formState.inputs.title.isValid}
         />
         <Input
         id="description" 
         element="textarea" 
         type="text" 
         label="Description" 
         validators={[VALIDATOR_MINLENGTH(5)]}
         errorText="please enter a valid description."
          onInput={inputchangeHandler}
         value={formState.inputs.description.value}
         valid={formState.inputs.description.isValid}
         />
         <Button type="submit" disabled={!formState.isValid}>UPDATE PLACE</Button>
        </form>
    );

};
export default UpdatePlace;
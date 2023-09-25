import React from "react";
import PlaceList from "../components/PlaceList";
import { useParams } from "react-router-dom";



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

const UserPlaces =()=>
{
    const userid = useParams().userid;
    const loadedPlaces = DUMMY_Places.filter(place=>place.creator === userid);
    return <PlaceList items={loadedPlaces}/>;
};
export default UserPlaces;
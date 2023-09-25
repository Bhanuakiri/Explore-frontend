import React from "react";
import UsersList from "../components/UsersList";

const Users =()=>{
    const USERs =[{
        id:'u1',
    name:'bhanu',
    image:'https://img.freepik.com/free-photo/portrait-sexy-handsome-fashion-male-model-man-dressed-elegant-suit-posing-street-blue-sky_158538-8275.jpg?w=2000',
    places:3}];
    return (<UsersList items={USERs}/>);
};

export default Users;
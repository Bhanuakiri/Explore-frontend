import React from "react";
import './UsersList.css';
import Card from "../../shared/UI elements/Card";
import Useritem from "./Useritem";


const UsersList= props =>{

    if(props.items.length ===0)
    {
        return (
            <div className="centre">
            <Card>
            <h2>No users found!</h2>
            </Card>
            </div>
        );
    }

    return (
        <ul className="users-list">
            {props.items.map(user =>(
                <Useritem
                    key ={user.id}
                    id={user.id}
                    name={user.name}
                    image={user.image}
                    placeCount={user.places}
                />
            )
            )}
        </ul>
    );
};
export default UsersList;
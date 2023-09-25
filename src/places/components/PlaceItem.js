import React from "react";
import './placeItem.css';
import { useState,Fragment,useContext} from "react";
import Card from "../../shared/UI elements/Card";
import Button from "../../user/components/FormElements/Button";
import Modal from "../../shared/UI elements/Modal";
import { AuthContext } from "../../shared/context/auth-context";
import Map from "../../shared/UI elements/Map";

const PlaceItem = props =>
{
    const auth = useContext(AuthContext);
    const [showMap,setshowMap] = useState(false);
    const [onConfirmModal,setonConfirmModal] = useState(false);

    const showDeleteHandler =()=>{
        setonConfirmModal(true);
    };
    const cancelDeleteHandler =()=>{
        setonConfirmModal(false);
    };
    const confirmDeleteHandler =()=>{
        setonConfirmModal(false);
        console.log('Deleting...');
    };

    const openMapHandler =()=>{
        setshowMap(true);
    };
    const closeMapHandler =()=>{
        setshowMap(false);
    };

    return(
        <React.Fragment>
        <Modal show={showMap} 
         onCancel={closeMapHandler} 
         header={props.address}
         contentClass="place-item__modal-content"
            footerClass="place-item__modal-actions"
            footer={<Button onClick={closeMapHandler}>CLOSE</Button>}
         >
         <div className="map-container">
         <Map center={props.coordinates} zoom={16}/>
         </div>
         </Modal>
         <Modal show={onConfirmModal} onCancel={cancelDeleteHandler} header="are you sure?" footerClass="place-item__modal-actions" footer={
            <React.Fragment>
                <Button inverse onClick={cancelDeleteHandler}>CANCEL</Button>
                <Button danger onClick={confirmDeleteHandler}>DELETE</Button>
            </React.Fragment>
         }>
         <p>Do You Want To Delete This Place? Once deleted it can't Restored...</p>
         </Modal>
    <li className="place-item">
    <Card className="place-item__content">
         <div className="place-item__image">
          <img src={props.image} alt={props.title}/>
         </div>
         <div className="place-item__info">
           <h2>{props.title}</h2> 
           <h2>{props.address}</h2>
            <p>{props.description}</p>
         </div>
         <div className="place-item__actions" >
           <Button inverse onClick={openMapHandler} >VIEW ON MAP</Button>
          {auth.isLoggedIn && (<Button to={`/places/${props.id}`}>EDIT</Button>)}
          {auth.isLoggedIn && (<Button danger onClick={showDeleteHandler}>DELETE</Button>)}
         </div>
         </Card>
    </li>
    </React.Fragment>);
};
export default PlaceItem;
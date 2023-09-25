import React from "react";
import './mainnavigation.css';
import MainHeader from "./mainheader";
import { Link } from "react-router-dom";
import { useState } from "react";
import NaviLinks from "./NaviLinks";
import Backdrop from "../UI elements/Backdrop";
import SideDrawer from "./SideDrawer";

const MainNavigation = props =>{
  const [drawerIsOpen,setdrawerIsOpen]=useState(false);
  const opendrawer =()=>{
    setdrawerIsOpen(true);
    console.log('drawer is open');
  };
  const closedrawer =()=>{
    setdrawerIsOpen(false);
  };
    return (

       <React.Fragment>
        {drawerIsOpen && <Backdrop onClick={closedrawer}/>}
         
          <SideDrawer show={drawerIsOpen} onClick={closedrawer}>
          {<nav className="main-navigation__drawer-nav">
            <NaviLinks/>
          </nav>}
         </SideDrawer>
        
        <MainHeader>
            <button className="main-navigation__menu-btn" onClick={opendrawer}>
              <span/>
              <span/>
              <span/>
            </button>
            <h1 className="main-navigation__title">
           <Link to="/">ExploreEcho</Link> 
            </h1>
            <nav className="main-navigation__header-nav">
              <NaviLinks/>
            </nav>
        </MainHeader>
        </React.Fragment>
    );
};

export default MainNavigation;
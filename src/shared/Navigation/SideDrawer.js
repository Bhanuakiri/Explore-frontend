import React from "react";
import "./SideDrawer.css";
import { ReactDOM } from "react";
import { CSSTransition } from "react-transition-group";

const SideDrawer = (props) => {
 return  (
  <CSSTransition  timeout={200} classNames="slide-in-left" mountOnEnter unmountOnExit>
    <aside className="side-drawer" onClick={props.onClick}>
    {props.children}
    {console.log("side drawer opens")}
    </aside>
 </CSSTransition>
 );
};
export default SideDrawer;

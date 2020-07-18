import React from "react";
import Button from "./Button"

const Sidebar = () => {
  return (


  <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

    
    <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
      <div className="sidebar-brand-icon">
        <i className="fas fa-chart-line"></i>
      </div>
      <div className="sidebar-brand-text mx-3">Admin</div>
    </a>

   
    <hr className="sidebar-divider my-0"/>

   
   <Button
     text = "Dashboard"
     icon = "fas fa-fw fa-tachometer-alt"
     active = "nav-item active"
   />

   
    <hr className="sidebar-divider"/>

    
    <div className="sidebar-heading">Actions</div>

   
    <Button
       text="Pages"
       icon= "fas fa-fw fa-folder"
       active = "nav-item"
    />

<Button
       text="Charts"
       icon = "fas fa-fw fa-chart-area"
       active = "nav-item"
    
    />

<Button
       text="Tables"
       icon = "fas fa-fw fa-table"
       active = "nav-item"
    
    
    />

   
    <hr className="sidebar-divider d-none d-md-block"/>
  </ul>
  
  );
}

export default Sidebar
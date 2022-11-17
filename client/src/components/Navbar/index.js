import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./NavbarElements";
import img1 from './images/header.png';
import img2 from './images/logo.png';
  
const Navbar = () => {
  return (
    <>
      
      <Nav>
      <img src={img1} alt="header" />
        <NavMenu>
          <NavLink to="/Home" activeStyle>
          <h1>Home</h1>
          </NavLink>
          <NavLink to="/HomeProducts" activeStyle>
          <h1>Products</h1>
          </NavLink>
          <NavLink to="/BatchQuantity" activeStyle>
          <h1>BatchQuantity</h1>
          </NavLink>
          <NavLink to="/Sales" activeStyle>
          <h1>Sales</h1>
          </NavLink>
          <NavLink to="/Stores" activeStyle>
          <h1>Stores</h1>
          </NavLink>
        </NavMenu>
        
      </Nav>
   
    </>
  );
};
  
export default Navbar;
 
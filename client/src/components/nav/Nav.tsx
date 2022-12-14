import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import NavContent from "./NavContent";
import { MENU_DATA } from "./data/MenuData";

const Nav: React.FC = () => {
  return (
    <NavSpace>
      <NavHeader>
        <NavLink to={"/"} className="navLink">
          Portfolio
        </NavLink>
      </NavHeader>
      <NavContent menuData={MENU_DATA} />
    </NavSpace>
  );
};

export default Nav;

const NavSpace = styled.nav`
  width: 330px;
  height: 100vh;

  .navLink {
    text-decoration-line: none;
  }

  .navLink:visited {
    color: white;
  }
`;

const NavHeader = styled.div`
  padding: 20px 40px;
  font-size: 20px;
`;

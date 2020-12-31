import React from "react";
// import { Button } from "./Button";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components/macro";

const NavButton = styled.button`
  border: none;
  color: ${(props) => (props.active ? "var(--active)" : "var(--light)")};
  height: 3rem;
`;

const NavContainer = styled.nav`
  background: var(--header);
  border-top: solid 1px black;
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const BottomNavContainer = () => {
  const location = useLocation();

  return (
    <NavContainer>
      <div>
        <Link to="/">
          <NavButton active={location.pathname === "/"}>
            ➕ Hinzufügen
          </NavButton>
        </Link>
        <Link to="/tagging">
          <NavButton active={location.pathname === "/tagging"}>
            🖍 Bearbeiten
          </NavButton>
        </Link>
        <Link to="/gallery">
          <NavButton active={location.pathname === "/gallery"}>
            👁 Ankucken
          </NavButton>
        </Link>
      </div>
    </NavContainer>
  );
};

export default BottomNavContainer;

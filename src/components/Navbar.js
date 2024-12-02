import React from "react";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
import { GithubContext } from "../context/context";
import DarkModeToggle from "react-dark-mode-toggle";

const Navbar = () => {
  const { isDarkMode, toggleTheme } = React.useContext(GithubContext);
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();
  const isUser = isAuthenticated && user;

  return (
    <Wrapper className={isDarkMode ? "dark-theme-compo" : null}>
      {isUser && user.picture && <img src={user.picture} alt={user.name} />}
      {isUser && user.name && (
        <h4>
          Welcome, <strong>{user.name.toUpperCase()}</strong>
        </h4>
      )}
      {isUser ? (
        <button
          className={isDarkMode ? "btn dark-theme" : "btn light-theme"}
          onClick={() => {
            logout({ returnTo: window.location.origin });
          }}
        >
          logout
        </button>
      ) : (
        <button onClick={loginWithRedirect}>login</button>
      )}
      <DarkModeToggle
        size={80}
        className="toggler"
        onChange={toggleTheme}
        checked={isDarkMode}
      />
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  padding: 1.5rem;
  margin-bottom: 4rem;
  background: linear-gradient(to right, #f06292, #8e24aa, #42a5f5);
  text-align: center;
  display: grid;
  grid-template-columns: auto auto auto 100px;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;

  h4 {
    margin-bottom: 0;
    font-weight: 400;
    color: white;
  }
  img {
    width: 35px !important;
    height: 35px;
    border-radius: 50%;
    object-fit: cover;
  }
  button {
    background: transparent;
    border: transparent;
    font-size: 1.2rem;
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    color: var(--clr-white);
    cursor: pointer;
  }
  .btn {
    background: linear-gradient(to right, #a11cb9, #e420a2);
  }
  .btn.dark-theme {
    color: var(--clr-grey-1);
    transition: all 0.3s ease-in-out;
  }
  .btn:hover {
    background: linear-gradient(to right, #e420a2, #a11cb9);
  }
  .btn.light-theme {
    color: var(--clr-white);
    transition: all 0.3s ease-in-out;
  }
  @media (max-width: 550px) {
    grid-template-columns: auto 100px auto;
    grid-template-rows: 1fr 1fr;

    .toggler {
      grid-column-start: 1;
      grid-row-start: 2;
      grid-column-end: 2;
      justify-content: center;
      margin: auto;
    }
    .btn {
      grid-column-start: 3;
      grid-row-start: 2;
      margin: 0 auto;
      justify-content: center;

      grid-column-end: 3;
    }
  }
`;

export default Navbar;

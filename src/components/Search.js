import React from "react";
import styled from "styled-components";
import { MdSearch } from "react-icons/md";
import { GithubContext } from "../context/context";
const Search = () => {
  const [user, setUser] = React.useState("");
  const { requests, error, searchGithubUser, isLoading, isDarkMode } =
    React.useContext(GithubContext);

  //get things from global context
  const handleSubmit = (e) => {
    e.preventDefault();
    if (user) {
      searchGithubUser(user);
    }
  };
  return (
    <section className="section">
      <Wrapper className="section-center">
        {error.show && (
          <ErrorWrapper>
            <p>{error.msg}</p>
          </ErrorWrapper>
        )}
        <form onSubmit={handleSubmit}>
          <div
            className={
              isDarkMode
                ? "form-control dark-theme-compo"
                : "form-control light-theme-compo"
            }
          >
            <MdSearch />
            <input
              type="text"
              placeholder="Enter GitHub User"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
            {requests > 0 && !isLoading && (
              <button
                type="submit"
                className={isDarkMode ? "dark-theme" : "light-theme"}
              >
                search
              </button>
            )}
          </div>
        </form>
        <h3>requests : {requests} / 60</h3>
      </Wrapper>
    </section>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: grid;
  gap: 1rem 1.75rem;
  @media (min-width: 768px) {
    grid-template-columns: 1fr max-content;
    align-items: center;
    h3 {
      padding: 0 0.5rem;
    }
  }
  .form-control {
    // background: var(--clr-white);
    display: grid;
    align-items: center;
    grid-template-columns: auto 1fr auto;
    column-gap: 0.5rem;
    border-radius: 5px;
    padding: 0.5rem;
    input {
      border-color: transparent;
      outline-color: var(--clr-grey-10);
      letter-spacing: var(--spacing);
      // color: var(--clr-grey-3);
      padding: 0.25rem 0.5rem;
      background: transparent;
    }
    button {
      border-radius: 5px;
      border-color: transparent;
      padding: 0.25rem 0.5rem;
      text-transform: capitalize;
      letter-spacing: var(--spacing);
      background: linear-gradient(to right, #a11cb9, #e420a2);
      color: var(--clr-white);
      transition: var(--transition);
      cursor: pointer;
      &:hover {
        background: linear-gradient(to right, #e420a2, #a11cb9);
        color: var(--clr-primary-10);
      }
    }
    button.dark-theme {
      color: var(--clr-grey-1);
      transition: all 0.3s ease-in-out;
    }
    button.light-theme {
      color: var(--clr-white);
      transition: all 0.3s ease-in-out;
    }
    svg {
      color: var(--clr-grey-5);
    }
    input,
    button,
    svg {
      font-size: 1.3rem;
    }
    @media (max-width: 800px) {
      button,
      input,
      svg {
        font-size: 0.85rem;
      }
    }
  }
  h3 {
    margin-bottom: 0;
    color: #79155b;
    font-weight: 400;
  }
`;
const ErrorWrapper = styled.article`
  position: absolute;
  width: 90vw;
  top: 0;
  left: 0;
  transform: translateY(-100%);
  text-transform: capitalize;
  p {
    color: red;
    letter-spacing: var(--spacing);
  }
`;
export default Search;

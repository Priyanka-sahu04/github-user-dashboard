import React from "react";
import { GithubContext } from "../context/context";
import styled from "styled-components";
import { MdBusiness, MdLocationOn, MdLink } from "react-icons/md";

const Card = () => {
  const { githubUser, isDarkMode } = React.useContext(GithubContext);
  const {
    avatar_url,
    html_url,
    name,
    company,
    blog,
    bio,
    location,
    twitter_username,
  } = githubUser;
  return (
    <Wrapper
      className={isDarkMode ? "dark-theme-compo " : "light-theme-compo "}
    >
      <header>
        <img src={avatar_url} alt={name} />
        <div>
          <h4>{name}</h4>
          <p>@{twitter_username || name}</p>
        </div>
        <a target="blank" href={html_url}>follow</a>
      </header>
      <p className="bio">{bio || "No bio :("}</p>
      <div className="links">
        <p>
          <MdBusiness></MdBusiness>
          {company || "No Company :("}
        </p>
        <p>
          <MdLocationOn></MdLocationOn>
          {location || "Earth"}
        </p>
        <a href={blog ? `${blog}` : "#"} target="blank">
          <MdLink></MdLink>
          {blog || "No blog :("}
        </a>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  background: var(--clr-white);
  padding: 1.5rem 2rem;
  border-radius: var(--radius);

  @media (max-width: 362px) {
    
  }

  position: relative;
  &::before {
    content: "user";
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(-100%);

    color: #79155b;
    border-top-right-radius: var(--radius);
    border-top-left-radius: var(--radius);
    text-transform: capitalize;
    padding: 0.5rem 1rem 0 1rem;
    letter-spacing: var(--spacing);
    font-size: 1rem;
  }
  header {
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    column-gap: 1rem;
    margin-bottom: 1rem;
    img {
      width: 75px;
      height: 75px;
      border-radius: 50%;
    }
    h4 {
      margin-bottom: 0.25rem;
    }
    p {
      margin-bottom: 0;
    }
    a {
      color: var(--clr-primary-10);
      border: 1px solid var(--clr-primary-10);
      padding: 0.25rem 0.75rem;
      border-radius: 1rem;
      text-transform: capitalize;
      letter-spacing: var(--spacing);
      transition: var(--transition);
      cursor: pointer;
      &:hover {
        background: linear-gradient(to right, #a11cb9, #e420a2);
        color: var(--clr-white);
      }
    }
  }
  .bio {
    color: var(--clr-grey-5);
  }
  .links {
    p,
    a {
      margin-bottom: 0.25rem;
      display: flex;
      align-items: center;
      svg {
        margin-right: 0.5rem;
        font-size: 1.3rem;
      }
    }
    a {
      color: var(--clr-primary-10);
      transition: var(--transition);
      svg {
        color: var(--clr-grey-5);
      }
      &:hover {
        color: var(--clr-primary-3);
      }
    }
  }
`;
export default Card;

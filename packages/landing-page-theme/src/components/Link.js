import React from "react";
import { connect, styled } from "frontity";

const Anchor = styled.a`
  color: #5700a3;
  border: 1px #000;
  border-radius: 0;
  margin-top: 0;
  padding: 0 5px;
  font-family: Bebas Neue, sans-serif;
  font-size: 25px;
  text-decoration: none;
`;

const Link = ({ href, actions, children }) => {
  return (
    <div>
      <Anchor
        href={href}
        onClick={event => {
          event.preventDefault();
          actions.router.set(href);
          actions.theme.closeMenu();
        }}
      >
        {children}
      </Anchor>
    </div>
  );
};


export default connect(Link);
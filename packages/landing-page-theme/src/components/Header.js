import React from "react";
import { connect, styled } from "frontity";
import { Button } from "./Button"
import Link from "./Link"
import { Menu } from "./Menu";

const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${props =>
    props.isPostType
      ? "background-color: aliceblue"
      : "background-color: mintcream"};

  h1 {
    font-size: 3em;
    text-align: center;
  }
`;

const Header = ({state, actions, isPostType}) => {
    const items = state.source.get(`/menu/${state.theme.menuUrl}/`).items;
    return <StyledHeader isPostType={isPostType}>
        {state.theme.isMenuOpen ? (
            <Menu>
                <Button onClick={actions.theme.closeMenu}>Close</Button>
                {items.map(item => <Link key={item.title} href={item.url}>{item.title}</Link>)}
            </Menu>
            ) :  <Button onClick={actions.theme.openMenu}>Menu</Button>
        }
    </StyledHeader>
}



export default connect(Header);
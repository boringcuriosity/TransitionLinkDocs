import React, { Component } from 'react'
import styled from 'styled-components'
import MenuItems from '../../components/MenuItems'
import Link from 'gatsby-plugin-transition-link/AniLink'
import * as theme from '../../theme'

export default class SidebarMenu extends Component {
  render() {
    return (
      <StyledSidebarMenu>
        <MenuItems slug="sidebar-menu">
          {items =>
            items.map(({ url, title, active, activeParent }, index) => (
              <li key={url}>
                <Link
                  className={active || activeParent ? 'active' : ''}
                  cover
                  bg="white"
                  direction={
                    index >
                    items.findIndex(item => item.active || item.activeParent)
                      ? 'down'
                      : 'up'
                  }
                  duration={1.25}
                  to={url}
                >
                  {title}
                  <LinkUnderline />
                </Link>
              </li>
            ))
          }
        </MenuItems>
      </StyledSidebarMenu>
    )
  }
}

const LinkUnderline = styled.div`
  position: absolute;
  bottom: -6px;
  width: 100%;
  overflow: hidden;
  left: 0;

  &:before {
    content: ' ';
    display: block;
    height: 4px;
    background-color: ${theme.color.lightGreen};
    transform: translateX(-102%);
    transition: 1s ease transform, 1s linear background-color;
    transition-delay: 1s, 0.5s;
  }
`

const StyledSidebarMenu = styled.ol`
  margin-bottom: 100px;
  padding-right: 20px;
  a {
    position: relative;
    margin-left: 10px;
  }

  li {
    color: ${theme.color.lightGreen};
  }

  .active {
    ${LinkUnderline} {
      &:before {
        transform: translateX(0);
        background-color: ${theme.color.salmon};
        transition-delay: 0s;
      }
    }
  }
`

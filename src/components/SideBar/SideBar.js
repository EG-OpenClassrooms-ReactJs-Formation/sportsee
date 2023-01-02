import React, {useState} from 'react'
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSwimmer, faBiking, } from '@fortawesome/free-solid-svg-icons'

const SidebarParent = styled.div`
  background: ${colors.secondary};
  width: 117px;
  /* height: 100vh; */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`


const SidebarItem = styled.div`

  margin-left: 20px;
  margin-right: 20px;
  background-color: ${colors.ternary};
  height: 64px;
  width: 64px;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 15px;
  font-size: 24px;
  align-self: center;
  line-height: 64px;
  text-align: center;
`;

const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
​  
`;

const SideBarText = styled.p`
  font-family: 'Roboto';
  
  font-style: normal;
  color: ${colors.ternary};
  transform: rotate(-90deg);
  font-weight: 500;
  font-size: 12px;
  line-height: 24px;
  margin: 0;
`
export function SideBar() {
  

  const SidebarItems = [
    {
        icon: faSwimmer
    },
    {
        icon: faBiking
    },
    {
        icon: faSwimmer
    },
    {
        icon: faSwimmer
    },
  ];
  return (
      <>
          <SidebarParent>
              <span/>
              <SideBarContainer>
              {
                  SidebarItems.map((item, index)=> {
                      return (
                          <SidebarItem key={index}>
                              <FontAwesomeIcon
                                icon={item.icon}
                                color={colors.primary}
                              />
                          </SidebarItem>
                      );
                  })
              }
              </SideBarContainer>
              <SideBarText>Copiryght, SportSee 2020</SideBarText>
          </SidebarParent>
      </>
  );
}

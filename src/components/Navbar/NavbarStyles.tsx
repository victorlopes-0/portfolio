import { AppBar, ToggleButtonGroup, ToggleButton, Select } from "@mui/material";
import styled from "@emotion/styled";
import colors from "../../constants/StyleConstants";

export const NavbarWrapper = styled(AppBar)`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: ${colors.graphite};
  color: ${colors.platinum};
  
  ul {
  
    display: flex;
    flex-direction: row;
    list-style: none;
    gap: 20px;
  }`;

export const NavbarItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0;

  &:hover {
    cursor: pointer; 
    color: ${colors.aquamarine};
  }
`;

export const ThemeToggleButtonGroup = styled(ToggleButtonGroup)`
`
export const ThemeToggleButton = styled(ToggleButton)`
  background-color: ${colors.charcoal};
  color: ${colors.aquamarine};

  &:hover {
    background-color: ${colors.darksilver};
  }
  
  &.Mui-selected {  
    background-color: ${colors.silver};
    svg {color: ${colors.aquamarine}};
    
    &:hover {
      background-color: ${colors.darksilver};}
    }
`

export const LanguageSelect = styled(Select)`
  background-color: ${colors.charcoal};
  color: ${colors.platinum};
`
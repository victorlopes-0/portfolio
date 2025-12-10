import { AppBar } from "@mui/material";
import styled from "@emotion/styled";
import colors from "../../constants/StyleConstants";

const NavbarWrapper = styled(AppBar)`
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

    li {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      margin: 0;
    }
  }`;


export default NavbarWrapper;
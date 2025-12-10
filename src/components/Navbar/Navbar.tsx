import { List } from '@mui/material';
import { DarkMode, Language } from '@mui/icons-material';
import NavbarWrapper from './NavbarStyles';

const Navbar = () => {
  const navItems = ['Home', 'About', 'Contact'];
  const options = [{name: 'Theme', icon: DarkMode}, {name: 'Language', icon: Language}];

  return (
    <NavbarWrapper position="fixed">
      <List>
        {navItems.map((item, index) => (
          <li key={index}>
            {item}
          </li>
        ))}
      </List>
      <List>
        {options.map((item, index) => (
          <li key={index}>
            { <item.icon /> } {item.name}
          </li>
        ))}
      </List>
    </NavbarWrapper>
  )
};

export default Navbar;
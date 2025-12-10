import React, { useState } from 'react';
import { 
  List,
  MenuItem
} from '@mui/material';
import { LightMode, DarkMode } from '@mui/icons-material';
import { 
  NavbarWrapper, 
  NavbarItem, 
  ThemeToggleButtonGroup,
  ThemeToggleButton,
  LanguageSelect
} from './NavbarStyles';

const Navbar = () => {
  const navItems = ["Home", "About", "Contact"];
  const [theme, setTheme] = useState<"light-mode" | "dark-mode">("light-mode");
  const [language, setLanguage] = useState<"en" | "pt">("en");

  const handleThemeChange = (
    event: React.MouseEvent<HTMLElement>,
    newTheme: "light-mode" | "dark-mode" | null
  ) => {
    if (newTheme) setTheme(newTheme);
  };

  const handleLanguageChange = (event: any) => {
    setLanguage((event.target as HTMLInputElement).value as "en" | "pt");
  };

  return (
    <NavbarWrapper position="fixed">
      <List>
        {navItems.map((item, index) => (
          <NavbarItem key={index}>
            {item}
          </NavbarItem>
        ))}
      </List>
      <List>
        <NavbarItem key={'theme'}>
          <ThemeToggleButtonGroup
            value={theme}
            exclusive
            onChange={handleThemeChange}
          >
            <ThemeToggleButton value="dark-mode">          
              <DarkMode />
            </ThemeToggleButton>
            <ThemeToggleButton value="light-mode"> 
              <LightMode />
            </ThemeToggleButton>
          </ThemeToggleButtonGroup>
        </NavbarItem>      
        <NavbarItem key={"language"}>
          <LanguageSelect
            value={language}
            onChange={handleLanguageChange}
          >
            <MenuItem value={"en"}>English</MenuItem>
            <MenuItem value={"pt"}>Português</MenuItem>              
          </LanguageSelect>
        </NavbarItem>
      </List>
    </NavbarWrapper>
  )
};

export default Navbar;
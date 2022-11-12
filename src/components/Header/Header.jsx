import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../../context/ThemeProvider';
import { THEME_LIGHT, THEME_DARK, THEME_NEUTRAL } from '@constants/themeSides';

import Favorites from '../Favorites';
import imgDroid from '@images/themeIcons/droid.e59cd9ff.svg';
import imgLightsaber from '@images/themeIcons/lightsaber.eb7d4cd6.svg';
import imgSpaceStation from '@images/themeIcons/space-station.7a027c6e.svg';

import styles from './Header.module.css';

const Header = () => {

  const isTheme = useTheme();
  console.log(isTheme);

  const [icon, setIcon] = useState(imgDroid);
  console.log(icon);

  
  useEffect (() => {
    switch (isTheme.theme) {
      case THEME_LIGHT: 
        setIcon(imgLightsaber);
        break
      case THEME_DARK: 
        setIcon(imgSpaceStation);
        break
      case THEME_NEUTRAL:
        setIcon(imgDroid);
        break
      default: setIcon(imgDroid);
    } 
  }, [isTheme])

  return (
    <div className={styles.container}>
        <div className={styles.logo}>
          <img src={icon} alt="Star Wars" />
        </div>
        <ul className={styles.list__container}>
            <li> <NavLink to="/">Home</NavLink> </li>
            <li> <NavLink to="people/?page=1">People</NavLink> </li>
            <li> <NavLink to="search">Search</NavLink> </li>
            <li> <NavLink to="not-found">Not Found</NavLink> </li>
            <li> <NavLink to="fail">Fail</NavLink> </li>
        </ul>

        <Favorites/>
        
    </div>
  );
}

Header.propTypes = {
    text: PropTypes.string
}

export default Header;
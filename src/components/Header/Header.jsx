import { NavLink } from 'react-router-dom';

import styles from './Header.module.css';

import Favorites from '../Favorites';
import HeaderLogo from '../HeaderLogo/HeaderLogo';


const Header = () => {

  return (
    <div className={styles.container}>
        
        <HeaderLogo />
    
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

export default Header;
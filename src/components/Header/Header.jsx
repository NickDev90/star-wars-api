import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Favorites from '../Favorites';

import styles from './Header.module.css';

const Header = () => {

  return (
    <div className={styles.container}>
        <ul className={styles.list__container}>
            <li> <NavLink to="/">Home</NavLink> </li>
            <li> <NavLink to="people/?page=1">People</NavLink> </li>
            <li> <NavLink to="not-found">Not Found</NavLink> </li>
        </ul>

        <Favorites/>
        
    </div>
  );
}

Header.propTypes = {
    text: PropTypes.string
}

export default Header;
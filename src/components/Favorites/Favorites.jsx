import {useSelector} from 'react-redux';
import { Link } from 'react-router-dom';

import favoritesIcon from '@images/bookmarks_icon.svg'
import styles from './Favorites.module.css';

const Favorites = () => {

  const count = useSelector(state => Object.keys(state.favorites).length);

  return (
    <div className={styles.favorites_icon__container}>
      <Link to='favorites'>
        <img src={favoritesIcon} alt="favorites" className={styles.favorites_icon} />
        <span className={styles.favorites__count}>{count}</span>
      </Link>
    </div>
  );
}

export default Favorites;
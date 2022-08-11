import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

import img404 from '../../assets/images/404.png'
import styles from './NotFoundPage.module.css';

const NotFoundPage = () => {

    const location = useLocation();

  return (
    <div className={styles.notFound__container}>
        {/* <h1 className="header__text">Page not found</h1> */}
        <img src={img404} alt="not_found" className={styles.notFound__image}/>
        <p className={styles.notFound__text}>No match for <u>{location.pathname}</u></p>
    </div>
  );
}

NotFoundPage.propTypes = {
    text: PropTypes.string
}

export default NotFoundPage;
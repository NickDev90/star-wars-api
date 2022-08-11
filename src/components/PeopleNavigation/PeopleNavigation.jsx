import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import UiButton from '@ui/UiButton';
import styles from './PeopleNavigation.module.css';

const PeopleNavigation = ({
  getResource,
  prevPage,
  nextPage,
  currentPage
}) => {

  const handleChangeNext  = () => getResource(nextPage);
  const handleChangePrev  = () => getResource(prevPage);
  

  return (
    <>
      <div className={styles.navi__buttons_row}>
        <Link to={`?page=${currentPage-1}`} className={styles.nav__link}>
          <UiButton 
            onClick={handleChangePrev}
            disabled={!prevPage}
            text="Prev"
            // theme="light"
          />
        </Link>

        <Link to={`?page=${currentPage+1}`} className={styles.nav__link}>
          <UiButton 
              onClick={handleChangeNext}
              disabled={!nextPage}
              text="Next"
          />
        </Link>        
      </div>
    </>
  );
}

PeopleNavigation.propTypes = {
  getResource: PropTypes.func,
  prevPage: PropTypes.string,
  nextPage: PropTypes.string,
  currentPage: PropTypes.number
}

export default PeopleNavigation;
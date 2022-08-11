import PropTypes from 'prop-types';
import styles from './HomePage.module.css';

const HomePage = () => {

  return (
    <>
        <h1 className='header__text'>This is Home Page</h1>
    </>
  );
}

HomePage.propTypes = {
    text: PropTypes.string
}

export default HomePage;
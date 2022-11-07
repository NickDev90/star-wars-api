import PropTypes from 'prop-types';
import ChooseSide from '@components/homePage/ChooseSide/ChooseSide';
import styles from './HomePage.module.css';

const HomePage = () => {

  return (
    <>
        <h1 className='header__text'>This is Home Page</h1>
        <ChooseSide />
    </>
  );
}

HomePage.propTypes = {
    text: PropTypes.string
}

export default HomePage;
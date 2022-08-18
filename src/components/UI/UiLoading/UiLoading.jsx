import PropTypes from 'prop-types';
import styles from './UiLoading.module.css';
import Loader from '../../../assets/images/loader.svg'

const UiLoading = () => {

  return (
    <>
        <img src={Loader} alt="Loader" className={styles.loader}/>
    </>
  );
}

UiLoading.propTypes = {
    // text: PropTypes.string
}

export default UiLoading;
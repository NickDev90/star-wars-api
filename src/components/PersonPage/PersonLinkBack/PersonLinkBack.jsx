import PropTypes from 'prop-types';
import backArrow from '@images/back_arrow.svg'
import styles from './PersonLinkBack.module.css';
import { useNavigate } from 'react-router';

const PersonLinkBack = () => {

    const navigate = useNavigate();

    const handleClick  = (e) => {
        e.preventDefault();
        navigate(-1);
    }
    

  return (
    <div >
        <a href="#" onClick={handleClick} className={styles.person__linkBack}>
            <img src={backArrow} alt="arrow back" className={styles.link__arrow}/>
            <span className={styles.link__text}>Go back</span>
        </a>
    </div>
  );
}

PersonLinkBack.propTypes = {
    text: PropTypes.string
}

export default PersonLinkBack;
import PropTypes from 'prop-types';
import styles from './PersonInfo.module.css';

const PersonInfo = ({personInfo}) => {

    return (
        <div className={styles.person_info_container}>
            <ul className={styles.person_info__list}>
                {personInfo.map(({ title, data }) => (
                    data && (
                        <li className={styles.person_info__item} key={title}>
                           <span className={styles.item__title}> {title} </span>: {data}  
                        </li>)
                ))}
            </ul>
        </div>
    );
}

PersonInfo.propTypes = {
    personInfo: PropTypes.array
}

export default PersonInfo;
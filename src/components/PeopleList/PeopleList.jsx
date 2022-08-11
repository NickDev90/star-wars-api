import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import styles from './PeopleList.module.css';


const PeopleList = ({people}) => {

  return (
    <ul className={styles.list__container}>
        {people.map( hero => (
            <li key={hero.id} className={styles.list__item}>
                <Link to={`/people/${hero.id}`}>
                    <img src={hero.img} alt="hero" className={styles.person__photo}/> 
                    <p className={styles.person__name}>{hero.name}</p> 
                </Link>
                
            </li>
        ))}
    </ul>
  );
}

PeopleList.propTypes = {
  people: PropTypes.array
}

export default PeopleList;
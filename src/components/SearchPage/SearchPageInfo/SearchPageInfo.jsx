import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './SearchPageInfo.module.css';

const SearchPageInfo = ({foundPersons}) => {

  return (
    <div >
        {foundPersons.length 
            ? (
                <ul className={styles.list__container}>
                      {foundPersons.map(({ id, img, name }) => (
                          <li key={id} className={styles.list__item}>
                              <Link to={`/people/${id}`}>
                                  <img src={img} alt="character" className={styles.person__image} />
                                  <p className={styles.person__name}>{name}</p>
                              </Link>
                          </li>
                      ))}
                </ul>
            )
            : <h2 className={styles.person__comment}>No results</h2>
        }


        {/* {foundPersons.map(item => (
            <div className={styles.person_item}>
                <div className={styles.person_image}>
                    <img src={item.img} alt="character" />
                </div>
                <span className={styles.person_name}>{item.name}</span>
            </div>
        ))}
       */}
    </div>
  );
}

SearchPageInfo.propTypes = {
    foundPersons: PropTypes.array
}

export default SearchPageInfo;
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import { makeConcurrentRequest } from '../../../utils/network';
import UiLoading from '../../UI/UiLoading/UiLoading';
import styles from './PersonFilms.module.css';



const PersonFilms = ({ personFilms }) => {

    const [filmsNames, setFilmsNames] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);

        (async () => {
            const result = await makeConcurrentRequest(personFilms);
            setFilmsNames(result);
            setIsLoading(false);
        })()
    }, [])

    return (
        <div className={styles.films__container}>
            {isLoading && <UiLoading/>}
            {filmsNames && (
                <ul className={styles.films__list}>
                    {filmsNames.sort((a,b) => a.episode_id - b.episode_id)
                    .map(film => 
                        <li key={film.episode_id} className={styles.film__item}>
                            <span className={styles.item__episode}>Episode {film.episode_id}</span> 
                            <span className={styles.item__colon}> : </span>
                            <span className={styles.item__title}>{film.title}</span>                       
                        </li> 
                    )}
                    
                </ul>
            )}
        </div>
    );
}

PersonFilms.propTypes = {
    personFilms: PropTypes.array
}

export default PersonFilms;
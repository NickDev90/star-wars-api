import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import PeopleList from '../../components/PeopleList/PeopleList';
import styles from './FavoritesPage.module.css';


const FavoritesPage = () => {
    const [people, setPeople] = useState([]);

    const storeData = useSelector(state => state.favorites);

    useEffect (() => {
        const arr = Object.entries(storeData);
        if(arr.length) {
            const persons = arr.map( item => ({
                id: item[0],
                ...item[1]
            }));
            setPeople(persons);
        }
        
    }, [storeData])

  return (
    <>
        <h1 className='header__text'>Favorites Page</h1>
        {people.length 
            ? <PeopleList people={people} />
            : <h2 className={styles.no__data}>No data</h2>
        }
        
    </>
  );
}


export default FavoritesPage;
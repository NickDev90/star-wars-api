import { useEffect, useState } from 'react';
import PeopleList from '../../components/PeopleList/PeopleList';
import { API_PEOPLE } from '../../constants/api';
import { withErrorApi } from '../../hoc-helpers/withErrorApi';
import { getPeopleId, getPeopleImage } from '../../services/getPeopleData';
import { getApiResource } from '../../utils/network';
import styles from './PeoplePage.module.css';


const PeoplePage = ({setErrorApi}) => {

    const [people, setPeople] = useState();
    

    const getResource = async (url) => {
        const res = await getApiResource(url);

        if (res) {
            const peopleList = res.results.map(({ name, url }) => {
                const id = getPeopleId(url);
                const img = getPeopleImage(id);

                return {
                    id,
                    name,
                    img
                }
            })
            setPeople(peopleList);
            setErrorApi(false);
        } else {
            setErrorApi(true);
        }

    }

    useEffect (() => {
        getResource(API_PEOPLE);
    }, [])

    return (

        <div className={styles.peoplelist}>
            <h1>Hi, people!</h1>
            {people && <PeopleList people={people} />}

        </div>


    )
}

export default withErrorApi(PeoplePage);

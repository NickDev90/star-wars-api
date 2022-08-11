import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { withErrorApi } from '@hoc-helpers/withErrorApi';
import PeopleList from '@components/PeopleList/PeopleList';
import PeopleNavigation from '@components/PeopleNavigation';

import { getApiResource, changeHTTP } from '@utils/network';
import { getPeopleId, getPeopleImage } from '@services/getPeopleData';
import { useQueryParams } from '@hooks/useQueryParams';

import { API_PEOPLE } from '@constants/api';
import styles from './PeoplePage.module.css';
import { getPeoplePageId } from '../../services/getPeopleData';


const PeoplePage = ({setErrorApi}) => {

    const [people, setPeople] = useState([]);
    const [prevPage, setPrevPage] = useState(null);
    const [nextPage, setNextPage] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);

    const query = useQueryParams();
    const queryPage = query.get('page');

    // if (!queryPage) queryPage === 1 ;
    console.log(queryPage);

    const getResource = async (url) => {
        const res = await getApiResource(url);
        console.log(res);
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
            setPrevPage(changeHTTP(res.previous));
            setNextPage(changeHTTP(res.next));
            setCurrentPage(getPeoplePageId(url))
            setErrorApi(false);
        } else {
            setErrorApi(true);
        }

    }

    useEffect (() => {
        getResource(API_PEOPLE+queryPage);
    }, [])

    return (

        <div className={styles.peoplelist}>
            {/* <h1 className='header__text'>Hi, people!</h1> */}
            <PeopleNavigation
                getResource={getResource}
                prevPage={prevPage}
                nextPage={nextPage}
                currentPage={currentPage}
            />
            {people && <PeopleList people={people} />}

        </div>


    )
}

PeoplePage.protoTypes = {
    setErrorApi: PropTypes.func
}

export default withErrorApi(PeoplePage);

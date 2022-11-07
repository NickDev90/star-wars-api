import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { debounce } from 'lodash';

import { withErrorApi } from '../../hoc-helpers/withErrorApi';
import { API_SEARCH } from '../../constants/api';
import { getApiResource } from '../../utils/network';

import { getPeopleId, getPeopleImage } from '../../services/getPeopleData';
import styles from './SearchPage.module.css';
import UiInput from '@ui/UiInput';
import SearchPageInfo from '../../components/SearchPage/SearchPageInfo/SearchPageInfo';
import { useCallback } from 'react';

const SearchPage = ({setErrorApi}) => {

    const [searchValue, setSearchValue] = useState('');
    const [foundPersons, setFoundPersons] = useState([]);



    const searchPeople = async params => {
        const res = await getApiResource(API_SEARCH + params)
        if (res) {
            const peopleList = res.results.map(({name, url}) => {
                const id = getPeopleId(url);
                const img = getPeopleImage(id);
                
                return {
                    id,
                    name,
                    img
                }
            })
            setFoundPersons(peopleList)
            setErrorApi(false);
        }else {
            setErrorApi(true)
        }
        console.log(params);
        console.log(res);
    }

    const debouncedSearch = useCallback(
        debounce( value => searchPeople(value), 500),
        []
    ) 
    

    const handleInputChange = (value) => {
        setSearchValue(value);
        debouncedSearch(value);
    }
    
    useEffect (() => {
        searchPeople('');
    }, [])

  return (
    <>
        <h1 className='header__text'>Search</h1>
        <UiInput 
            value={searchValue}
            handleInputChange={handleInputChange}
            placeholder="Type character's name"
            classes={styles.input__search}
        />

        <SearchPageInfo foundPersons={foundPersons}/>
    </>
  );
}

SearchPage.protoTypes = {
    setErrorApi: PropTypes.func
}


export default withErrorApi(SearchPage);
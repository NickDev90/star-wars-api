import React, { useEffect, useState, Suspense } from 'react';
import {useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import { useParams } from 'react-router';
import {getApiResource} from '@utils/network';
import styles from './PersonPage.module.css';
import { API_PERSON } from '../../constants/api';
import { getPeopleImage } from '../../services/getPeopleData';
import { withErrorApi } from '../../hoc-helpers/withErrorApi';
import PersonPhoto from '../../components/PersonPage/PersonPhoto/PersonPhoto';
import PersonInfo from '../../components/PersonPage/PersonInfo/PersonInfo';
import PersonLinkBack from '../../components/PersonPage/PersonLinkBack/PersonLinkBack';

import PersonFilms from '../../components/PersonPage/PersonFilms/PersonFilms';

const PersonPage = ({setErrorApi}) => {

    const [personName, setPersonName] = useState(null);
    const [personInfo, setPersonInfo] = useState(null);
    const [personPhoto, setPersonPhoto] = useState(null);
    const [personFilms, setPersonFilms] = useState(null);
    const [isSelected, setIsSelected] = useState(false);


    const favorites = useSelector(state => state.favorites);

    const params = useParams();
    const id = params.id;

    useEffect (() => {
        if(favorites[id]) setIsSelected(true);
        else setIsSelected(false);
    }, [favorites])

    useEffect(() => {
        (async () => {
            
            const res = await getApiResource(`${API_PERSON}/${id}`);
            if (res) {
                setPersonName(res.name);
                setPersonPhoto(getPeopleImage(id));
                setPersonInfo([
                    {title: "Birth year", data: res.birth_year},
                    {title: "Gender", data: res.gender},
                    {title: "Height", data: res.height},
                    {title: "Mass", data: res.mass},
                    {title: "Eye color", data: res.eye_color},
                    {title: "Hair color", data: res.hair_color},
                    {title: "Skin colir", data: res.skin_color},
                ]);
                res.films.length && setPersonFilms(res.films);
                setErrorApi(false);
            } else {
                setErrorApi(true)
            }

        })();
    }, [])



  return (
    <>
        <PersonLinkBack/>
        <div className={styles.person__container}>
            <div>
                <span className={styles.person__title}>{personName}</span>    
            </div>

                <div className={styles.person_data__body}>

                    <PersonPhoto personPhoto={personPhoto} personName={personName} id={id} isSelected={isSelected}/>
                                        
                    {personInfo && <PersonInfo personInfo={personInfo}/>}
                    
                    {personFilms && <PersonFilms personFilms={personFilms}/>}                   
            </div>
        </div>
            
        
        
    </>
  );
}

PersonPage.propTypes = {
    text: PropTypes.string
}

export default withErrorApi(PersonPage);
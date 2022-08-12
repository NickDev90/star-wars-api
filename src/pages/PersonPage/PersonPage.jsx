import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate, useParams } from 'react-router';
import {getApiResource} from '@utils/network';
import styles from './PersonPage.module.css';
import { API_PERSON } from '../../constants/api';
import { getPeopleImage } from '../../services/getPeopleData';
import { withErrorApi } from '../../hoc-helpers/withErrorApi';
import PersonPhoto from '../../components/PersonPage/PersonPhoto/PersonPhoto';
import PersonInfo from '../../components/PersonPage/PersonInfo/PersonInfo';
import PersonLinkBack from '../../components/PersonPage/PersonLinkBack/PersonLinkBack';

const PersonPage = ({setErrorApi}) => {

    const [personName, setPersonName] = useState(null);
    const [personInfo, setPersonInfo] = useState(null);
    const [personPhoto, setPersonPhoto] = useState(null);

    const navigate = useNavigate();

    const params = useParams();


    console.log(personInfo);

    useEffect(() => {
        (async () => {
            const id = params.id;
            const res = await getApiResource(`${API_PERSON}/${id}`);
            if (res) {
                setErrorApi(false);
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
            } else {
                setErrorApi(true)
            }
            console.log(res);

        })();
    }, [])



  return (
    <>
        {/* <button onClick={()=>navigate(-1)} className={styles.back__button}>Go back</button> */}
        <PersonLinkBack/>
        <div className={styles.person__container}>
            <div>
                <span className={styles.person__title}>{personName}</span>    
            </div>

                <div className={styles.person_data__body}>

                    <PersonPhoto personPhoto={personPhoto} personName={personName}/>
                                        
                    {personInfo && 
                    <PersonInfo personInfo={personInfo}/>}
                    

               
                    
            </div>
        </div>
            
        
        
    </>
  );
}

PersonPage.propTypes = {
    text: PropTypes.string
}

export default withErrorApi(PersonPage);
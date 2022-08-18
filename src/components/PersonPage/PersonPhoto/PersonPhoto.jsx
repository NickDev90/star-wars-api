import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setFavorite, removeFavorite } from '../../../store/actions';
import starYellow from '../../../assets/images/star-yellow.svg';
import starWhite from '../../../assets/images/star-white.svg';
import styles from './PersonPhoto.module.css';

const PersonPhoto = ({personPhoto, personName, id, isSelected}) => {

    const dispatch = useDispatch();


    const dispatchFavorites  = () => {
        if (isSelected) {
            dispatch(removeFavorite(id))
        }else {
            dispatch(setFavorite({
                [id] : {
                    name: personName,
                    img: personPhoto
                }
            }))
        }
    }
    
    

    return (
        <>
            <div className={styles.person__photo_container}>
                <img src={personPhoto} alt={personName} className={styles.person__photo}/>
                <img src={isSelected ? starYellow : starWhite} 
                    alt="favorite" 
                    className={styles.favorite__star}
                    onClick={dispatchFavorites}
                />
            </div>
            
        </>    
    );
}

PersonPhoto.propTypes = {
    personPhoto: PropTypes.string,
    personName: PropTypes.string,
}

export default PersonPhoto;
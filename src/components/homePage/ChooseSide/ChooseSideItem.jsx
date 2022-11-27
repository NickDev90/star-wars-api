import cn from 'classnames';
import PropTypes from 'prop-types';

import { useTheme } from '@context/ThemeProvider';
import styles from './ChooseSideItem.module.css';

const ChooseSideItem = ({ theme, text, img, classes }) => {

    const isTheme = useTheme();

    const changeTheme = (the) => {
        isTheme.change(the)
    }

    return (
        <div
            className={cn(styles.sideItem, styles[classes])}
            onClick={() => changeTheme(theme)}
        >
            <img
                src={img}
                alt={text}
                className={styles.item__image}
            />
            <span className={styles.item__text}>
                {text}
            </span>
        </div>
    )
}


ChooseSideItem.propTypes = {
    theme: PropTypes.string,
    text: PropTypes.string,
    img: PropTypes.string,
    classes: PropTypes.string,
}

export default ChooseSideItem;
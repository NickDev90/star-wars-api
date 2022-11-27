import { useState, useEffect, useRef } from 'react';
import cn from 'classnames';

import styles from './HeaderLogo.module.css';

import { useTheme } from '@context/ThemeProvider';
import { THEME_LIGHT, THEME_DARK, THEME_NEUTRAL } from '@constants/themeSides';

import imgDroid from '@images/themeIcons/droid.e59cd9ff.svg';
import imgLightsaber from '@images/themeIcons/lightsaber.eb7d4cd6.svg';
import imgSpaceStation from '@images/themeIcons/space-station.7a027c6e.svg';

const HeaderLogo = () => {

    const {theme, change} = useTheme();
    const ref = useRef();

    const [icon, setIcon] = useState(imgDroid);
    const [isOpen, setIsOpen] = useState(false);

    const iconsData = [
        {
            'name': imgDroid,
            'theme': THEME_NEUTRAL
        },
        {
            'name': imgLightsaber,
            'theme': THEME_LIGHT
        },
        {
            'name': imgSpaceStation,
            'theme': THEME_DARK
        }
    ]

    // set current theme icon first in the list
    const index = iconsData.findIndex( el => el.theme === theme);
    const spliced = iconsData.splice(index, index + 1)
    iconsData.unshift(...spliced)


    useEffect(() => {
        switch (theme) {
            case THEME_LIGHT:
                setIcon(imgLightsaber);
                break
            case THEME_DARK:
                setIcon(imgSpaceStation);
                break
            case THEME_NEUTRAL:
                setIcon(imgDroid);
                break
            default: setIcon(imgDroid);
        }
    }, [theme])

    const handleChangeTheme = (theme) => {
        change(theme)
        setIsOpen(false)
    }

    // close icon list when click out of icons container 
    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);

    return (
        <div className={styles.logo__container} ref={ref}>
            {!isOpen
                ? <div className={styles.single__logo}
                        onClick={() => setIsOpen(true)}
                >
                    <img src={icon} alt="Star Wars"
                        className={styles.logo__img}
                    />
                </div>

                : <div className={styles.list__wrapper}>
                    <ul className={cn(styles.logo__list, isOpen && styles.open)} onBlur={() => setIsOpen(false)}>
                        {
                            iconsData.map(item => (
                                <li className={styles.logo__item} 
                                    onClick={() => handleChangeTheme(item.theme)}
                                    key={item.name}
                                >
                                    <img src={item.name} alt="Star Wars" className={styles.logo__img} />
                                </li>
                            ))
                        }
                    </ul>
                </div>
            }
        </div>
    );
}


export default HeaderLogo;
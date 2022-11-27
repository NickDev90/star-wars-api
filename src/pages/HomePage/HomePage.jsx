import styles from './HomePage.module.css';
import { THEME_LIGHT, THEME_DARK, THEME_NEUTRAL } from '@constants/themeSides';

import ChooseSideItem from '@components/homePage/ChooseSide/ChooseSideItem';
import imgLightSide from '@images/chooseSideImages/light-side.jpg';
import imgDarkSide from '@images/chooseSideImages/dark-side.jpg';
import imgNeutralSide from '@images/chooseSideImages/neutral-side.jpg';

const HomePage = () => {

    return (
        <>
            <h1 className='header__text'>Choose side</h1>

            <div className={styles.container}>
                <ChooseSideItem
                    img={imgLightSide}
                    text='Light Side'
                    theme={THEME_LIGHT}
                    classes="item__light"
                />
                <ChooseSideItem
                    img={imgDarkSide}
                    text='Dark Side'
                    theme={THEME_DARK}
                    classes="item__dark"
                />
                <ChooseSideItem
                    img={imgNeutralSide}
                    text="I'm Han Solo"
                    theme={THEME_NEUTRAL}
                    classes="item__neutral"
                />
            </div>
        </>
    );
}

export default HomePage;
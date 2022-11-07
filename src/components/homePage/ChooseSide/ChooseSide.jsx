import cn from 'classnames';
import { useTheme } from '@context/ThemeProvider';
import { THEME_LIGHT, THEME_DARK, THEME_NEUTRAL } from '@constants/themeSides';
import imgLightSide from '@images/chooseSideImages/light-side.jpg';
import imgDarkSide from '@images/chooseSideImages/dark-side.jpg';
import imgNeutralSide from '@images/chooseSideImages/neutral-side.jpg';
import styles from './ChooseSide.module.css';

const ChooseSideItem  = ({theme, text, img, classes}) => {
  
  const isTheme = useTheme();

  const changeTheme  = (theme) => {
    isTheme.change(theme)
  }

  return (
    <div className={cn(styles.sideItem, classes)} onClick={() => changeTheme(theme)}>
      <img src={img} alt={text} className={styles.item__image}/>
      <span className={styles.item__text}>{text}</span>
    </div>
  )
}


const ChooseSide = () => {



  return (
    <>
        <h1>Choose side</h1>

        <div className={styles.container}>
            <ChooseSideItem 
                img={imgLightSide} 
                text='Light Side' 
                theme={THEME_LIGHT}
                classes={styles.item__light}
            />
            <ChooseSideItem 
                img={imgDarkSide} 
                text='Dark Side' 
                theme={THEME_DARK}
                classes={styles.item__dark}
            />
            <ChooseSideItem 
                img={imgNeutralSide} 
                text="I'm Han Solo" 
                theme={THEME_NEUTRAL}
                classes={styles.item__neutral}
            />
        </div>
        
    </>
  );
}

export default ChooseSide;
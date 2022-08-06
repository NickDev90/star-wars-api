import styles from './PeopleList.module.css';

const PeopleList = ({people}) => {

  return (
    <ul className={styles.list__container}>
        {people.map( hero => (
            <li key={hero.id} className={styles.list__item}>
                <a href="#">
                    <img src={hero.img} alt="hero" className={styles.person__photo}/> 
                    <p className={styles.person__name}>{hero.name}</p> 
                </a>
                
            </li>
        ))}
    </ul>
  );
}

export default PeopleList;
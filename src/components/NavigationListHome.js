import React from 'react'; 
import styles from './styles/navigationListHome.module.css'
import imgVoting from '../img/vote-table.png'
import imgGallery from '../img/images-search.png'
import imgBreeds from '../img/pet-breeds.png'

const NavigationListHome = () => {
return (
 
    <ul className={styles.list}>
        
        <li >
            <div className={styles.cardVoting}>
                <img width='100' height='124' src={imgVoting} alt='voting'/>
            </div>
            <button className={styles.button} type='button'>voting</button>
        </li>
        <li>
            <div className={styles.cardBreeds}>
                <img src={imgBreeds} alt='breeds'/>
            </div>
            <button className={styles.button} type='button'>breeds</button>
        </li>
        <li>
            <div className={styles.cardGallery}>
                <img src={imgGallery} alt='gallery'/>
            </div>
            <button className={styles.button} type='button'>gallery</button>
        </li>
        
    </ul>
  
)
}
export default NavigationListHome
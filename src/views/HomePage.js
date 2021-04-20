
import React, { Component } from 'react'; 
import styles from './styles/homePage.module.css'
import imgHome from '../img/girl-and-pet.png'
import logo from '../img/Logo.svg'
import NavigationList from '../components/NavigationListHome'
import ViewsPage from './ViewsPage'
class HomePage extends Component {
   state = {
       renderPage : true
   }
    render () {
        return (<> 
            <div className={styles.baseContainerHome}>
            
            <div className={styles.homeContainer}>
            <img alt='logo' src={logo} className={styles.logo}/>
            <h2 className= {styles.title}> Hi intern!</h2>
             <span className={styles.text}>Welcome to MSI 2021 Front-end test</span>
             <span className={styles.listTitle}>Lets start using The Dogs API</span>
             <NavigationList/>
            </div>
             
             {this.state.renderPage ? <div className={styles.baseContainer}>
             <img className={styles.imgHome} src={imgHome} width='100%' alt='imgPreviws'/>
             
             </div> : <ViewsPage/>}
             
            </div>
            
            </>)
    } 
}
export default HomePage;


import React, { Component } from 'react'; 
import { Route } from 'react-router-dom';
import styles from './styles/homePage.module.css'
import logo from '../img/Logo.svg'
import NavigationList from '../components/NavigationListHome'
import GalleryPage from './GalleryPage'
import HomePreviews from '../components/HomePreviewsImg'
import Search from '../components/SearchNameMenu'
import Breeds from './BreedsPage'
import Voting from './VotingPage'
class HomePage extends Component {
   state = {
       renderPage : false
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
             <div className={styles.container}>
             <Route exact path="/" component={HomePreviews} />
             <Route path="/gallery" component={Search} />
             <Route path="/gallery" component={GalleryPage} />
             <Route path="/breeds" component={Search} />
             <Route path="/breeds" component={Breeds} />
             <Route path="/voting" component={Search} />
             <Route path="/voting" component={Voting} />
             </div>
            </div>
            </>)
    } 
}
export default HomePage;

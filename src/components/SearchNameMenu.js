import React, { Component } from 'react'
// import React, { Component } from 'react'
import styles from './styles/searchNameMenu.module.css'


class SearchMenu extends Component {
    state = {
        search: ''
    }
    handleChange = (e) => {
    this.setState({search: e.target.value})
    }
    render () {
        return (
            <> 
            <div>
                <form >
                
                <label className={styles.labelSearch}>
                <input className={styles.inputSearch} placeholder='Search for breeds by name' type='text' onChange={this.handleChange} value={this.state.value}>      
                
                </input>
                
                </label>
                </form>
            </div>
            </>
        )
    }
}
export default SearchMenu;




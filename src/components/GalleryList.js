import React, { Component } from 'react';
import styles from './styles/GalleryList.module.css'
import { connect } from 'react-redux';
import selectors from '../redux/dog/dogSelectors'
import operations from '../redux/dog/dogOperation'

class GalleryList  extends Component {
  
componentDidMount () {
  this.props.getImagesList()
  console.log(this.props);
}
   render () {
    const {images} = this.props;
    console.log(images)
    return (
     
      <div>
     <ul className={styles.list}>
     {images && images.map(img => {
       const url = img?.image?.url ? img.image.url :  img.url
      return <li key={img.id}><img className={styles.img} width='180' height='150' src={url} /></li> 
    }
     )}
     </ul>
      </div>
     ) 
   }
}
const mapStateToProps = state => ({
  images: selectors.getImages(state),
});
const mapDispatchToProps = dispatch => ({
  getImagesList: () => dispatch(operations.getImages()),
})

export default connect(mapStateToProps, mapDispatchToProps)(GalleryList)
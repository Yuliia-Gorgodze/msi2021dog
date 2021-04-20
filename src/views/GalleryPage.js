import React, { Component} from 'react';
import propTypes from 'prop-types'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { connect } from 'react-redux';
import styles from './styles/galleryPage.module.css'
import goBack from '../img/goBack.svg'

import ModalUpload from '../components/ModalUpload'


class GalleryPage extends Component {
state = {
  order: 'Random',
  type: 'All',
  breed: 'None',
  limit: '5 items per page',
  modal: false
}
handleChange = (e) => {
this.setState({[e.target.name]: e.target.value})
}


  render() {
    return (
     <>
     
     <div className={styles.containerViews}>
     
  <Form className={styles.form}>
  <div className={styles.buttonGroup}><Button className={styles.buttonGoBuck} type="button"><img src={goBack}/></Button>
     <Button className={`${styles.buttonGallery} ${styles.button}` } disabled type="button">gallery</Button>
     <ModalUpload/>
     </div>
    
  <Form.Group >
 
    <Form.Label className={styles.titleLabel}>order</Form.Label>
    <Form.Control onChange={this.handleChange} name='order' className={styles.input} as="select" >
      <option>Random</option>
      <option>Desc</option>
      <option>Asc</option>
    </Form.Control>
  </Form.Group>
  <Form.Group>
 
    <Form.Label  className={styles.titleLabel}>type</Form.Label>
    <Form.Control onChange={this.handleChange} name='type' className={styles.input} as="select" >
      <option>All</option>
      <option>Static</option>
      <option>Animated</option>
    </Form.Control>
  </Form.Group>
  <Form.Group>
    <Form.Label className={styles.titleLabel}>breed</Form.Label>
    <Form.Control onChange={this.handleChange} name='breed' className={styles.input} as="select" >
      <option>None</option>
      <option>Affenpinscher</option>
      <option>Afghan Hound</option>
      <option>African Hunting Dog</option>
      <option>Airedale Terrier</option>
      <option>Akbash Dog</option>
      <option>Akita</option>
    </Form.Control>
  </Form.Group>
  <Form.Group>
    <Form.Label className={styles.titleLabel}>limit</Form.Label>
    <Form.Control onChange={this.handleChange} name='limit' className={styles.input} as="select" >
      <option>5 items per page</option>
      <option>10 items per page</option>
      <option>15 items per page</option>
      <option>20 items per page</option>
    </Form.Control>
  </Form.Group>
  </Form>
  
  </div>
     </>
    );
  }
}


export default GalleryPage;


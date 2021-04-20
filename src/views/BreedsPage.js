import React, { Component} from 'react';
import propTypes from 'prop-types'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { connect } from 'react-redux';
import styles from './styles/breedsPage.module.css'
import goBack from '../img/goBack.svg'

import ModalUpload from '../components/ModalUpload'


class BreedsPage extends Component {
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
     
     <div className={styles.containerBreeds}>
     
  <Form className={styles.form}>
  <div className={styles.buttonGroup}><Button className={styles.buttonGoBuck} type="button"><img src={goBack}/></Button>
     <Button className={`${styles.buttonBreeds} ${styles.button}` } disabled type="button">breeds</Button>
    
     </div>
    
  <Form.Group >

    <Form.Control  className={styles.input} onChange={this.handleChange} name='order'  as="select" >
      <option>All breeds</option>
      <option>Affenpinscher</option>
      <option>Afghan Hound</option>
      <option>African Hunting Dog</option>
      <option>Airedale Terrier</option>
      <option>Akbash Dog</option>
      <option>Akita</option>

    </Form.Control>
  </Form.Group>
  <Form.Group >
    <Form.Control onChange={this.handleChange} className={styles.inputLimit} name='type' as="select" >
    <option>Limit: 5</option>
      <option>Limit: 10</option>
      <option>Limit: 15</option>
      <option>Limit: 20</option>
    </Form.Control>
  </Form.Group>
  </Form>
  </div>
     </>
    );
  }
}


export default BreedsPage;
import React, { Component} from 'react';
import propTypes from 'prop-types'
import Form from 'react-bootstrap/Form'
import { connect } from 'react-redux';


class ViewsPage extends Component {

  render() {
    return (
     <>
     <div className='containerRight'>
       <Form.Group>
    <Form.Label>Disabled input</Form.Label>
    <Form.Control placeholder="Disabled input" disabled />
  </Form.Group>
  <Form.Group>
    <Form.Label>Disabled select menu</Form.Label>
    <Form.Control as="select" disabled>
      <option>Disabled select</option>
    </Form.Control>
  </Form.Group>
  <Form.Group>
    <Form.Check type="checkbox" label="Can't check this" disabled />
  </Form.Group>
  </div>
     </>
    );
  }
}


export default ViewsPage;


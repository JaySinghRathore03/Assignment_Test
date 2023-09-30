import React, { useState } from 'react';
import Button from '../Button/Button';
import './NewContact.css';

const NewContact = props => {

  const submitClickHandler = event => {
    event.preventDefault();
    props.onAddProduct();
  };

  const submitClearHandler = event =>{
    props.onClearTable()
  }

  return (
    <section id="new-contact">
      <h2>Click to Display New Contact</h2>
        <Button type="submit" onClick={submitClickHandler}>ADD CONTACT</Button>
        <span>
        <Button type="submit" onClick={submitClearHandler}>CLEAR TABLE</Button>  
        </span>
    </section>
  );
};

export default NewContact;

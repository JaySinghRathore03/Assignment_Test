import React from 'react';

import './ContactItem.css';

const ContactItem = props => {
  return (
    <li className="contact-item">
      <h2>Name: {props.name}</h2>
      <p>Email: {props.email}</p>
    </li>
  );
};

export default ContactItem;

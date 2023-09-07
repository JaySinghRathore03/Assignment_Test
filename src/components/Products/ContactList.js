import React from 'react';

import ContactItem from './ContactItem';
import './ContactList.css';

const ContactList = props => {
  let content;
  if (!props.contactInfo || props.contactInfo.length === 0) {
    content = <p>Could not find any Contact. Click to Find one?</p>;
  } else {
    content = (
      <ul className="contact-list">
        {props.contactInfo.map(p => (
          <ContactItem key={p.id} name={p.title} email={p.email} />
        ))}
      </ul>
    );
  }

  return <section id="contacts">{content}</section>;
};

export default ContactList;

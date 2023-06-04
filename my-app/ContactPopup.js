import React from 'react';
import { styles } from './styles';

const ContactPopup = ({ selectedContact, closePopup }) => {
  const contactImage = selectedContact?.image ? (
    <img
      src={selectedContact?.image}
      alt="Contact Picture"
      className={styles.contactImage}
    />
  ) : (
    <div className={styles.imageIcon}>👦</div>
  );

  return (
    <div className={styles.modalContainer}>
      {contactImage}
      <h2 className={styles.modalTitle}>{selectedContact?.name}</h2>
      <p className={styles.modalPhone}>{selectedContact?.phone}</p>
      <button onClick={closePopup}>Dismiss</button>
    </div>
  );
};

export default ContactPopup;

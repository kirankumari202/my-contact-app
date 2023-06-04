import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { styles } from './styles';

const AddContactForm = ({ addContact, predefinedContacts }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleAddContact = () => {
    const newContact = { name, phone };
    addContact(newContact);
    setName('');
    setPhone('');
  };

  return (
    <View style={styles.addContactContainer}>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
        style={styles.addContactInput}
      />
      <TextInput
        placeholder="Phone"
        value={phone}
        onChangeText={setPhone}
        style={styles.addContactInput}
        keyboardType="phone-pad"
      />
      <Button title="Add Contact" onPress={handleAddContact} />
    </View>
  );
};

export default AddContactForm;

import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, Modal, Dimensions, TouchableWithoutFeedback } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { preDefinedContacts } from './contacts';
import { styles } from './styles';
import ContactPopup from './ContactPopup';
import AddContactForm from './AddContactForm';

const { width, height } = Dimensions.get('window');

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [showAddContact, setShowAddContact] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Fetch contacts from phone or use preDefinedContacts
    setContacts(preDefinedContacts); // Replace with actual code to fetch contacts from phone
  }, []);

  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
    setShowAddContact(false);
  };

  const renderContact = ({ item }) => (
    <TouchableOpacity onPress={() => handleContactPress(item)}>
      <View style={styles.contactContainer}>
        <Text style={styles.contactName}>{item.name}</Text>
        <Text style={styles.contactPhone}>{item.phone}</Text>
      </View>
    </TouchableOpacity>
  );

  const handleContactPress = (contact) => {
    setSelectedContact(contact);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const filterContacts = (query) => {
    setSearchQuery(query);
    const filteredContacts = preDefinedContacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(query.toLowerCase())
    );
    setContacts(filteredContacts);
  };

  const handleCall = (phoneNumber) => {
    // Implement the call functionality here
    console.log('Calling', phoneNumber);
  };

  const handleScreenTouch = () => {
    setShowPopup(false);
  };

  return (
    <TouchableWithoutFeedback onPress={handleScreenTouch}>
      <View style={styles.container}>
        <Text style={styles.title}>My Contact App</Text>
        <TextInput
          placeholder="Search"
          value={searchQuery}
          onChangeText={filterContacts}
          style={styles.searchInput}
        />
        <FlatList
          data={contacts}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderContact}
          contentContainerStyle={styles.contactList}
        />
        <Modal visible={showPopup} animationType="slide">
          <ContactPopup selectedContact={selectedContact} closePopup={closePopup} />
        </Modal>
        <Modal visible={showAddContact} animationType="slide">
          <AddContactForm addContact={addContact} />
        </Modal>
        <View style={styles.addButtonContainer}>
          <TouchableOpacity onPress={() => setShowAddContact(true)}>
            <MaterialIcons name="add" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default App;

